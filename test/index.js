import bodyParser from 'body-parser';
import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import cors from 'cors';

const port = 3000;
const __dirname = path.resolve();

const app = express();
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../_output/UI')));

function log (message) {
  console.log(Date.now() + " - " + message)
}

const colourdb = new sqlite3.Database('sqlitedb/colours.db', (err) => {
  if (err) {
    console.error("Error opening database " + err.message);
  } 
});

app.get("/api/colours/:id", async (req, res, next) => {
  var params = [req.params.id]
  let result = await dbGetColour("SELECT hex_code, colour_name FROM colours WHERE colour_id = ?", params)
  res.status(200).json(result);
});


app.get("/api/colours", async (req, res, next) => {
  log("getting all db colours");
  let result = await dbGetAllColours("SELECT hex_code, colour_name FROM colours")
  res.status(200).json(result)
});

app.post("/api/colours", (req, res, next) => {
  var reqBody = re.body;
  colourdb.run(`INSERT INTO colours (colour_name, hex_code) VALUES (?,?)`,
      [reqBody.colour_name, reqBody.hex_code],
      function (err, result) {
          if (err) {
              res.status(400).json({ "error": err.message })
              return;
          }
          res.status(201).json({
              "colour_id": this.lastID
          })
      });
});

async function dbGetColourByHex(query, id){
  return new Promise(function(resolve,reject){
    colourdb.each(query, id, function(err,result){
      if(err){return reject(err);}
      resolve(result.colour_name);
    });
  });
}

async function dbGetColour(query, id){
  return new Promise(function(resolve,reject){
    colourdb.each(query, id, function(err,result){
      if(err){return reject(err);}
      resolve(result.colour_name + ": " + result.hex_code);
    });
  });
}

async function dbGetAllColours(query){
  return new Promise(function(resolve,reject){
    colourdb.all(query, function(err,result){
      if(err){return reject(err);}
      resolve(result);
    });
  });
}

async function dbGetHex(query, colour){
  return new Promise(function(resolve,reject){
    colourdb.each(query, colour, function(err,result){
      if(err){return reject(err);}
      resolve(result.hex_code);
    });
  });
}

async function dbAddColour(query, values){
  return new Promise(function(resolve,reject){
    colourdb.run(query, values, function(err,result){
      if(err){return reject(err);}
      resolve(result);
    });
  });
}

async function dbAddEggs(query, values){
  return new Promise(function(resolve,reject){
    eggdb.run(query, values, function(err,result){
      if(err){return reject(err);}
      resolve(result);
    });
  });
}

async function getHex(event) {
  let query = "SELECT hex_code FROM colours WHERE replace(colour_name, ' ', '') = ?"
  let colourLookup = event.toLowerCase().replace(/ /g,"")
  let value = await dbGetHex(query, colourLookup)
  console.log("Got Hex value: " + value);
  return value;
}


async function getColourName(event) {
  let query = "SELECT colour_name FROM colours WHERE hex_code = ?"
  let colourLookup = event.toLowerCase().replace(/ /g,"")
  let value = await dbGetColourByHex(query, colourLookup)
  console.log("Got colour value: " + value);
  return value;
}

app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf
  }
}));

app.listen(port, () => {
  console.log(`Twitch Webhook listening at http://localhost:${port}`)
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../_output/UI', 'index.html'))
})
