const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require('dotenv').config();

app.use(cors(
    {
        origin: ["https://twitter-clone-nu-steel.vercel.app/"],
        methods:["POST","GET"],
        credentials: true
    }
));


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5qezy3v.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const postCollection = client.db("database").collection("posts"); 
        const userCollection = client.db("database").collection("users"); 

       
        app.get('/user', async (req, res) => {
            const user = await userCollection.find().toArray();
            res.send(user);
        })
        app.get('/loggedInUser', async (req, res) => {
            const email = req.query.email;
            const user = await userCollection.find({ email: email }).toArray();
            res.send(user);
        })
        app.get('/post', async (req, res) => {
            const post = (await postCollection.find().toArray()).reverse();
            res.send(post);
        })
        app.get('/userPost', async (req, res) => {
            const email = req.query.email;
            const post = (await postCollection.find({ email: email }).toArray()).reverse();
            res.send(post);
        })

        app.post('/register', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);
        })

        app.post('/post', async (req, res) => {
            const post = req.body;
            const result = await postCollection.insertOne(post);
            res.send(result);
        })

        
        app.patch('/userUpdates/:email', async (req, res) => {
            const filter = req.params;
            const profile = req.body;
            const options = { upsert: true };
            const updateDoc = { $set: profile };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result)
        })

     
        

    } catch (error) {
        console.log(error);
    }
} run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from Twitter Clone!')
})

app.listen(port, () => {
    console.log(`Twitter clone is listening on port ${port}`)
})
