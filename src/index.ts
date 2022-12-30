import { json } from "body-parser";
import express, { Request, Response } from "express";
import { request } from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { mockMessages } from "./module/mockMessages";
import { mockUserDetails } from "./module/mUserDetails";

//const express = require('express');

const app = express();
const listOfUsers = mockUserDetails();


app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());


app.get('/mockUsers', (req: Request, res: Response) =>{
    res.send(listOfUsers);
});

// app.get('/mockMessages', (req: Request, res: Response) =>{
//     const message = req.params.id;
//     const user = listOfUsers.find((u) => u.id === id);
    
//     res.send(JSON.stringify(user));
// });

app.post('/new-message', (req: Request, res: Response) =>{
    console.log(req.body);
    res.send();
});


app.listen(3003, () => {
  console.log('server is running');  
});

