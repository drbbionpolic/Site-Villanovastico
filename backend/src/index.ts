import "reflect-metadata";
import { User } from "./model/User";
import express, { json, urlencoded } from "express";
import sha256 from 'crypto-js/sha256';

const app = express();

app.use(json());
app.use(urlencoded());

app.get('/user', async (req, res) => {
  return res.json(await User.find());
});

app.post('/user', async (req, res) => {
  try{
    let newUser = User.create();
    newUser.email = req.body.email;
    newUser.nick = req.body.nick;
    newUser.password = sha256(req.body.password).toString(CryptoJS.enc.Utf8);
    await User.save(newUser);
    return res.json(newUser);
  } catch(e){
    return res.status(400).end();
  }
});

app.put('/user/:userId', async (req, res) => {
  if (typeof await User.findOne(req.params.userId) != "undefined"){
    let user = <User>(await User.findOne(req.params.userId));
    let editUser = User.create();
    editUser.email = req.body.email;
    editUser.nick = req.body.nick;
    editUser.password = sha256(req.body.password).toString(CryptoJS.enc.Utf8);
    await User.update(user, editUser);
  } else {
    return res.status(404).end();
  }
});

app.delete('/delete/:userId', async (req, res) => {
  if (typeof await User.findOne(req.params.userId) != "undefined"){
    await User.delete(req.params.userId);
    return res.status(200).end();
  } else {
    return res.status(404).end();
  }
});

app.listen(80, () => {
  console.log("O servidor foi iniciado com sucesso!");
});