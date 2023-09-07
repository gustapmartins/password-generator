import { Request, Response } from "express";
import { getRandomPassword } from "../Service/password.service";

export const findPassword = async (req: Request, res: Response) => {
  try {
    const {charsetNumbers, charsetTiny, charsetCaracter, charsetUppercase} = req.body
    const password = parseInt(req.params.password);
    const user = await getRandomPassword(password, charsetNumbers, charsetTiny, charsetCaracter, charsetUppercase);
    return res.status(201).json({ msg: user });
  } catch (err) {
    return res.status(502).send(err);
  }
};