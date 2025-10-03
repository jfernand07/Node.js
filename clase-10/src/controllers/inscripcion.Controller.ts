import { type Request, type Response } from "express";
import { HttpErrorStatus } from "../types/types.ts";  
import * as inscripcionService from "../services/inscripcion.services.ts";

export const getinscripcionById = async (req: Request, res: Response) => {
  try {
    const inscripcion = await inscripcionService.getAllinscripcion();
    res.json(inscripcion);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al obtener usuarios",
      error,
    });
  }
};


export const createinscripcion = async (req: Request, res: Response) => {
  try {
    const { id, status, usuariold, eventold} = req.body;

    if (!id || !status || !usuariold || !eventold) {
      return res
        .status(HttpErrorStatus.BAD_REQUEST) 
        .json({ message: "Todos los campos son requeridos" });
    }

    const newinscripcion = await inscripcionService.createinscripcion({
      
      status,
      usuariold,
      eventold,
    });

    res.status(201).json(newinscripcion);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al crear usuario",
      error,
    });
  }
};

export const getinscripcion = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const inscripcion = await inscripcionService.getinscripcionById(Number(id));

    if (!inscripcion) {
      return res
        .status(HttpErrorStatus.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }

    res.json(inscripcion);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al obtener usuario",
      error,
    });
  }
};

export const updateinscripcion = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const updateinscripcion = await inscripcionService.updateinscripcion(Number(id), req.body);

    if (!updateinscripcion) {
      return res
        .status(HttpErrorStatus.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }

    res.json(updateinscripcion);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al actualizar usuario",
      error,
    });
  }
};


export const deleteinscripcion = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await inscripcionService.deleteinscripcion(Number(id));

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
