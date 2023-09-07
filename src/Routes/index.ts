import express, { Express } from "express";
import user from "./password.routes";

const Routes = (app: Express) => {
  app.use(
    express.json(), 
    user
  );
};

export default Routes;
