import express from "express";
import { getClient } from "../db";
import User from "../models/User";



const usersRouter = express.Router();

const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json({message: "Internal Server Error"});
};

usersRouter.get("/users", async (req, res) => {
    try {
        const client = await getClient();
        const users = await client.db()
        .collection<User>('users')
        .find().toArray();
        res.status(200).json(users);    
    } catch (err) {
        errorResponse(err, res);
    }
});

usersRouter.post("/users", async (req, res) => {
    const user = req.body as User;
    const client = await getClient();
    await client.db()
        .collection<User>('users')
        .insertOne(user);
    res.status(201).json(user);
  });

  export default usersRouter;