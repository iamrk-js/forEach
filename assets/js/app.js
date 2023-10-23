const cl = console.log;


// const todoContainer = document.getElementById("todoContainer")


// // for(let i = 0; i < skills.length; i++){
// //     cl(skills[i])
// // }
// // HOF >> a function which accepts another function as argument
// // callback function >> A function which is passed as argument in another function

// // arrayName.forEach(callbackFun(para){
// // para >> will gives us array(arrayName) element one by one
// // })

// // skills.forEach(function(ele){
// //     cl(ele)
// // })


// // skills.forEach(ele => cl(ele))


// // let skills = ["HTML", "CSS", "JS", "Angular"]

// // let result = `<ul class="list-group">`;

// // for(let i = 0; i < skills.length; i++){
// //     result = result + `<li class="list-group-item">${skills[i]}</li>`
// // }

// // result += `</ul>`;

// // todoContainer.innerHTML = result;



// let skills = ["HTML", "CSS", "JS", "Angular"]

// let result = `<ul class="list-group">`;

// // skills.forEach(function(skill){
// //     result +=`<li class="list-group-item">I Love ${skill}</li>`
// // })


// // skills.forEach((skill) => {
// //     result +=`<li class="list-group-item">I Love ${skill}</li>`
// // })

// skills.forEach(skill => result += `<li class="list-group-item">I Love ${skill}</li>`)

// result += `</ul>`;

// todoContainer.innerHTML = result


// let stdArr = [
//     {
//         fname: "Tony",
//         lname: "Stark",
//         nickName: "IronMan",
//         email: "tony@starkindu.com",
//         contact: 1234567890
//     },
//     {
//         fname: "Peter",
//         lname: "Parkar",
//         nickName: "SpiderMan",
//         email: "peter@starkindu.com",
//         contact: 1234567890
//     },
//     {
//         fname: "Bruce",
//         lname: "Wayne",
//         nickName: "Batman",
//         email: "bruce@wayneindu.com",
//         contact: 1234567890
//     }
// ]

// let allTr = ``;

// stdArr.forEach((stdObj, i) => {
//     allTr += `
//                 <tr>
//                     <td>${i + 1}</td>
//                     <td>${stdObj.fname}</td>
//                     <td>${stdObj.lname}</td>
//                     <td>${stdObj.nickName}</td>
//                     <td>${stdObj.email}</td>
//                     <td>${stdObj.contact}</td>
//                 </tr>
//             `
// })

// const stdContainer = document.getElementById("stdContainer");
// stdContainer.innerHTML = allTr;

const postsArr = [
    {
        title: "Javascript",
        content: `JavaScript Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`
    },
    {
        title: "Es6",
        content: `Es6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`
    },
    {
        title: "Typescript",
        content: `Typescript Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`
    },
    {
        title: "Angular",
        content: `Angular Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`
    },
    {
        title: "Node",
        content: `Node Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`
    }, {
        title: "Express",
        content: `Express Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`
    },
    {
        title: "MongoDB",
        content: `MongoDB Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`
    }
]


let postCards = ``;

postsArr.forEach((post) => {
    cl(post)
    postCards += `
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h2 class="m-0">
                                    ${post.title}
                                </h2>
                            </div>
                            <div class="card-body">
                                <p class="m-0">
                                    ${post.content}
                                </p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success">Edit</button>
                                <button class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
            
                `
})

const postsContainer = document.getElementById("postsContainer");

postsContainer.innerHTML = postCards;