// // Code using Promises
// const person1='person 1: Shows ticket';
// const person2='person 2: Shows ticket';
// const person4='person 4: Shows ticket';
// const person5='person 5: Shows ticket';

// const wifeBringTickets= new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('ticket')
//     }, 2000);
// })

// const bringPopcorn=wifeBringTickets.then((msg)=>{
//      console.log(`wife: i have ${msg}`);
//      console.log(`husband: lets go`)
//      console.log(`wife: i am hungry`);
//      return new Promise((resolve,reject)=>resolve(`${msg} popcorn`))
// })

// const bringButter=bringPopcorn.then((msg)=>{
//     console.log(`husband: we have ${msg}`);
//      console.log(`husband: lets go`)
//      console.log(`wife: i want butter`);
//      return new Promise((resolve,reject)=>resolve(`${msg} Butter`))
// })

// const getColdDrinks=bringButter.then((msg)=>{
//  console.log(`husband: we have ${msg}`);
//  console.log(`husband: lets go`)
//  console.log(`wife: i want Cold drink`);
//      return new Promise((resolve,reject)=>resolve(`${msg} Cold Drinks`))
// })

// console.log(person1);
// console.log(person2);
// getColdDrinks.then((value)=>console.log(value));
// console.log(person4);
// console.log(person5);

// //CoDE using Async Await
// const person1='person 1: Shows ticket';
// const person2='person 2: Shows ticket';
// const person4='person 4: Shows ticket';
// const person5='person 5: Shows ticket';

// const premovie  = async ()=>{

//     const wifeBringTickets= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('ticket');
//         }, 2000);
//     });
//     let ticket= await wifeBringTickets;

//         console.log(`wife: i have ${ticket}`)
//         console.log(`husband: lets go`)
//         console.log(`wife: i am hungry`);

//     const bringPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
//     let popcorn= await bringPopcorn;
//         console.log(`husband: we have ${popcorn}`);
//         console.log(`husband: lets go`)
//         console.log(`wife: i want butter`);

//     const bringButter = new Promise((resolve,reject)=>resolve('butter'));
//     let butter= await bringButter
//         console.log(`husband: we have ${butter}`);
//         console.log(`husband: lets go`)
//         console.log(`wife: i want Cold drink`);

//     const getColdDrinks = new Promise((resolve,reject)=>resolve('cold drink'));
//     let coldD=await getColdDrinks;
//         console.log(`husband: we have ${coldD}`);
//         console.log(`husband: lets go`)
//         console.log('person 3: shows ticket')
// }

// console.log(person1);
// console.log(person2);
// premovie();
// console.log(person4);
// console.log(person5);

//create and delete post using async await

// const posts=[
//     {title:'post one', body:'this is post one'},
//     {title:'post two', body:'this is post two'}
//   ];

// let post={title:'post three',body:'this is post three'};

// const postsCreateDelete= async ()=>{
//     const getPost= ()=>{
//         let output='';
//         setTimeout(() => {
//             posts.forEach((post)=>{
//              output+=`<li>${post.title}</li>`;
//             })
//             document.body.innerHTML=output;
//         }, 1000);
//     }
//     const createPost= ()=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 posts.push(post);
//                 const error=false;

//                 if(!error)
//                 resolve(posts)
//                 else
//                 reject('Error : something went wrong')

//             }, 1000);
//         })
//     }

//     const deletePost= ()=>{
//         return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//              let val=posts.pop();

//              if(val!==undefined)
//                 resolve(posts)
//              else
//                 reject('Error : Array is empty')
//          }, 1000);
//         })
//     }
//         await createPost();
//         await deletePost();

//         getPost();

// }
// postsCreateDelete();

const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

let post = { title: "post three", body: "this is post three" };

const postsCreateDelete = async () => {
  const getPost = () => {
    let output = "";
    setTimeout(() => {
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  };
  const createPost = new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) resolve(posts);
      else reject("Error : something went wrong");
    }, 3000);
  });

  await createPost;

  const deletePost = new Promise((resolve, reject) => {
    setTimeout(() => {
      let val = posts.pop();

      if (val !== undefined) resolve(posts);
      else reject("Error : Array is empty");
    }, 1000);
  });

  await deletePost;

  getPost();
};
postsCreateDelete();
