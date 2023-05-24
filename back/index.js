const express = require('express')
const app = express()
const PORT = 7070
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const cors=require("cors");
app.use(bodyParser.json());
app.use(cors());


const ImigrantSchema=new mongoose.Schema({
    imageUrl:String,
    title:String,
    description:String,
   country:String,
})
const ImigrantModel=new mongoose.model('Imigrant',ImigrantSchema);



app.get("/api", (req, res) => {
  res.send("welcome to out API!");
});


app.get("/api/imigrants", async (req, res) => {
    const { title } = req.query;
    const imigrants = await ImigrantModel.find();
    if (!title) {
      res.status(200).send(imigrants);
    } else {
      const searchedImigrants = imigrants.filter((x) =>
        x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
      );
      res.status(200).send(searchedImigrants);
    }
  });
  
  app.get("/api/imigrants/:id", async(req, res) => {
    const { id } = req.params;
    const imigrant = await ImigrantModel.findById(id)
    res.status(200).send(imigrant);
  });
  
  app.delete("/api/imigrants/:id",async(req, res) => {
    const id = req.params.id;
    const deleteImigrant = await ImigrantModel.findByIdAndDelete(id);
    res.status(203).send({
      message: `${deleteImigrant.title} deleted successfully!`,
    });
  });
  
  
  
  app.post("/api/imigrants", async (req, res) => {
    const { title,imageUrl,description,country} = req.body;
    const newImigrant = new ImigrantModel({
      title:title,
      country:country,
      description:description,
      imageUrl: imageUrl,
    });
    await newImigrant.save();
    res.status(201).send({
      message: `${newImigrant.title} posted successfully`,
      payload: newImigrant,
    });
  });
  app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
  });
  mongoose.connect('mongodb+srv://asif_admin:Admin123@app.6i78tjn.mongodb.net/?retryWrites=true&w=majority').then(() => {
      console.log("Mongo DB connected!");
  });

























