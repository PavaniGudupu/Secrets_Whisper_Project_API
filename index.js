
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view-engine', 'ejs');

app.get("/", async (req, res) => {
try{
    const response = await axios.get(API_URL);
    const request = response.data;
    console.log(request);
    res.render("index.ejs", {secret: request.secret, user: request.username});

}catch(error){
    console.log(error.message);
    res.status(500).send(error.message);
}
});

app.listen(3000, (req, res)=> {
    console.log("Server running on port 3000");
});