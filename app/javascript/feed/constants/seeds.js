// import Faker from 'faker';
//
// let users = [];
// let profiles = [];
// let posts = [];
// let reviews = [];
// let tips = [];
//
// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// for (let i = 0; i < 20; i++) {
//   let user = {
//     id: i,
//     email: Faker.internet.email()
//   };
//   let profile = {
//     id: i,
//     user_id: user.id,
//     platform: ['pc', 'xbl', 'psn'][getRandomInt(3)],
//     region: ['us', 'eu'][getRandomInt(2)],
//     tag: Faker.name.firstName(),
//     sr: getRandomInt(5000),
//     roles: ['tank', 'support', 'damage'][getRandomInt(3)],
//     reputation: getRandomInt(101)
//   };
//   for (let j = 0; j < getRandomInt(5); j++) {
//     let post = {
//       id: (i * j),
//       profile_id: profile.id,
//       title: Faker.lorem.sentence(),
//       summary: Faker.lorem.paragraph(),
//       coachability: getRandomInt(101)
//     }
//     posts.push(post);
//   }
//
//   users.push(user);
//   profiles.push(profile);
// }

let hidden = [];

for (let i = 0; i < posts.length; i++) {
  hidden.push(true);
}

// console.log(posts);

export {
  // users,
  // profiles,
  posts 
  // reviews,
  // tips,
  // hidden
};
