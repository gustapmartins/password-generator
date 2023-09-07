import { Router } from "express";
import {findPassword } from "../Controller/password.controller";

const user = Router();

user
    .post("/getPassword/:password", findPassword)

export default user;
