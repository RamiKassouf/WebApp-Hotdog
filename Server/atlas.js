const Express = require('express');
const cors=require('cors');
const {MongoClient, ObjectID} = require("mongodb")
const BodyParser = require("body-parser")
const client= new MongoClient("mongodb+srv://usergs:usergs4@cluster0.vo5sfpp.mongodb.net/Breeds/breed");
const server = Express();
server.use(BodyParser.json());
server.use(BodyParser.urlencoded({extended : true}));
server.use(cors());



var collection;



server.post("/search", async (request, response) => {
    try {
        let result = await collection.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query" : `${request.query.term}`,
                        "path" : "name",
                        "fuzzy": {
                            "maxEdits": 2
                        }
                    }
                }
            }
        ]).toArray();
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message : error.message});
    }
})

server.get("/get/:id", async (request, response) => {
    try {
        let result = await collection.findOne({"_id ": ObjectID(request.params.id)});
        response.send(result);
    } catch(e) {
        response.status(500).send({ message : e.message});
    }
})


server.listen(8080, async () => {
    try{
        await client.connect();
        console.log("Connected correctly to server");
        collection = client.db("Breeds").collection("breed");
    } catch(e) {
        console.error(e);
    }
})