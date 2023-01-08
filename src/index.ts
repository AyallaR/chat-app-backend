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
const listofMessages = mockMessages();


app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get('/', (req: Request, res: Response) =>{
  res.send('Good morning');
});

//getUsers
app.get('/mockUsers', (req: Request, res: Response) =>{
    res.send(listOfUsers);
});

//getMessages
app.get('/mockMessages', (req: Request, res: Response) =>{
  const mockMessagesWithNames = listofMessages.map((message) => {
  const author = listOfUsers.find(user => user.id === message.authorId);
  const authorName = author && author.name;
  return { ...message, authorName };
});
  res.send(mockMessagesWithNames);
});

//getUserDetails
app.get('/:id',(req: Request, res: Response) =>{
  const id = req.params.id
  res.send(listOfUsers[Number(id)-1]);
});

//post 

app.post('/new-message', (req: Request, res: Response) =>{
  const addNewMessage = req.body;  
  console.log(req.body);
  res.send();
    
});


app.listen(3003, () => {
  console.log('server is running at http://localhost:3003');  
});

