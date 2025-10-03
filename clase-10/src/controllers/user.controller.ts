import { type Request, type Response } from "express";
import { HttpErrorStatus } from "../types/types.ts";  
import * as userService from "../services/user.services.ts";

export const getusers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al obtener usuarios",
      error,
    });
  }
};


export const createuser = async (req: Request, res: Response) => {
  try {
    const { name, last_name, email, password, role } = req.body;

    if (!name || !last_name || !email || !password || !role) {
      return res
        .status(HttpErrorStatus.BAD_REQUEST) 
        .json({ message: "Todos los campos son requeridos" });
    }

    const newUser = await userService.createUser({
      name,
      last_name,
      email,
      password,
      role,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al crear usuario",
      error,
    });
  }
};

export const getuser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));

    if (!user) {
      return res
        .status(HttpErrorStatus.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al obtener usuario",
      error,
    });
  }
};

export const updateuser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser = await userService.updateUser(Number(id), req.body);

    if (!updatedUser) {
      return res
        .status(HttpErrorStatus.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al actualizar usuario",
      error,
    });
  }
};


export const deleteduser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await userService.deleteUser(Number(id));

    if (!deleted) {
      return res
        .status(HttpErrorStatus.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al eliminar usuario",
      error,
    });
  }
};

