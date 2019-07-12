import { Prisma} from 'prisma-binding';
import {fragmentReplacements} from './resolvers/index'

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  fragmentReplacements
});

export { prisma as default };

// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({
//         id: authorId
//     })

//     if(!userExists){
//         throw new Error('User not found')
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{author {id name email posts {id title published}}}')

//     return post.author
// }

// createPostForUser('cjxdyylve016x07775i9o6fry', {
//     title: 'Great books to read',
//     body: 'The War of Art',
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })

// prisma.mutation.createPost({
//     data: {
//         title: "GraphQL 102",
//         body: "",
//         published: false,
//         author: {
//             connect: {
//                 id: "cjxdyylve016x07775i9o6fry"
//             }
//         }
//     }
// }, '{id title body published}').then((data) => {
//     console.log(JSON.stringify(data))
//     return prisma.query.users(null, '{id name posts {id title}}')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({
//         id: postId
//     })

//     if(!postExists){
//         throw new Error("Post not found")
//     }

//     const post = await prisma.mutation.updatePost({
//         data: {
//             ...data,
//         },
//         where: {
//             id: postId
//         }
//     }, '{author{id name email posts {id title published}}}')
//     return post.author
// }

// updatePostForUser('ughig', {
//     published: false
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })

// prisma.mutation.updatePost({
//     data: {
//         body: "Modern GraphQL",
//         published: true
//     },
//     where: {
//        id: "cjxenwcwn043t07773skcllhm"
//     }
// }, '{id title body published}').then((data) => {
//     console.log(JSON.stringify(data))
//     return prisma.query.posts(null, '{id title body published}')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })
