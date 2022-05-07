const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(express.json());

/*
mongoDB:
db-user-name: crud-db
pass: f7Ayb97SOGNt8B0R
*/
// database conection url
const uri = "mongodb+srv://crud-db:f7Ayb97SOGNt8B0R@cluster0.0kaol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("Student-Management");
    const studentCollection = database.collection("students");

    // create a document to insert data in db
   /* const studentCollection = {
        name: "Zahidul Islam",
        email: "zahidul@gamil.com"
    } */

    // CREATE DATA/POST DATA
    app.post('/students', async (req, res) => {
        const newStudent = req.body;
        const result = await studentCollection.insertOne(newStudent);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        console.log('got the data: ', req.body);
        console.log('added the data: ', result);
    })

    // READ DATA/GET DATA
    app.get('/students', async (req, res) => {
        const cursor = studentCollection.find({});
        const students = await cursor.toArray();
        res.send(students);
    })

    // fecth selected data into update page to update
    app.get('/students/:id', async(req, res) => {
        const id = req.params.id;
        const query = {_id: ObjectId(id)};
        const student = await studentCollection.findOne(query);
        res.send(student)
    })

// UPDATE DATA
app.put('/students/:id', async(req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;
    const filter = {_id: ObjectId(id)};
    const options = { upsert: true };
    const updateDoc = {
        $set: {
          name: updatedStudent.name,
          email: updatedStudent.email
        },
      };
      const result = await studentCollection.updateOne(filter,updateDoc, options)
    console.log('updating students...',id);
    res.json(result);
})


    // DELETE/REMOVE DATA
    app.delete('/students/:id', async(req, res) => {
        const id = req.params.id;
        const query = {_id: ObjectId(id)};
        const result = await studentCollection.deleteOne(query);
    })

  } 
  finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Connected with the CRUD server...');
})

app.listen(port, ()=>{
    console.log("Listening from : ",port);
})