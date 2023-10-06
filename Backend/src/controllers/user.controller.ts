import { Request, Response } from "express";
import { compareHashPassword, hashPassword } from "../helper/bcryptHelper";
import { signJwt } from "../helper/jwtHelper";
import userModel from "../model/user-model";

export const userRegisterController = async (req: Request, res: Response) => {
  try {
    let { name, email, password, role } = req.body;

    let userExist = await userModel.findOne({ email });

    if (userExist) {
      return res.status(200).send({ message: "User already registered" });
    }

    // Validation
    if (!name || !email || !password || !role) {
      return res.status(400).send({ error: "Missing fields" });
    }

    // hash password
    let hash = await hashPassword(password);

    // saving user data in database
    const user = await userModel.create({ email, password: hash, role, name });
    // After successful registration
    if (user) {
      res.status(201).send({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log("Error while registering", error);
    res.status(400).send(error);
  }
};

export const userLoginController = async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body;
    let userExist = await userModel.findOne({ email });

    if (!userExist) {
      return res.status(400).send({ message: "user not found." });
    }

    const hashPassword: string | undefined =
      userExist?.password?.toString() || "";

    const correctPassword = await compareHashPassword(password, hashPassword);

    if (!correctPassword) {
      return res.status(404).send({
        message: "Invalid Password",
      });
    }

    // create an access token

    const accessToken = signJwt(
      { user: userExist._id, role: userExist.role },
      { expiresIn: "1y" }
    );

    res.status(200).send({
      message: "Login Successfully",
      user: {
        name: userExist?.name,
        email: userExist?.email,
      },
      accessToken,
      role: userExist.role,
    });
  } catch (error) {
    console.log("Error while login", error);
    res.status(400).send(error);
  }
};
