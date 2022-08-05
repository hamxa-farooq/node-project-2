import { faker } from '@faker-js/faker'
import connectDb from '../database/connection.js'
import Post from '../models/postModel.js'
import mongoose from 'mongoose'
import 'dotenv/config'

connectDb();

const userIds = ['62ed043253f09fcc79caa06c', '62ed044153f09fcc79caa06e', '62ed045353f09fcc79caa070', '62ed046553f09fcc79caa072', '62ed047f53f09fcc79caa074', '62ed04bc53f09fcc79caa078'];
var dummyPosts = [];

for(let i=0; i<1000; i++){
    let dummyPost = {
        title: faker.lorem.sentence(4),
        body: faker.lorem.paragraph(),
        userId: userIds[ faker.datatype.number({min: 0, max: 5}) ],
        draft: faker.datatype.number({min: 0, max: 1}),
    }
    
    dummyPosts.push(dummyPost);
}

setTimeout(() => {
    const seedDb = async () => {
        console.log("seeding post collection");
        await Post.insertMany(dummyPosts);
    }
    
    seedDb()
    .then(() => {
        mongoose.connection.close();
        console.log("seeding post collection completed")
    })
}, 1000);