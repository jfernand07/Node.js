import { type Request, type Response } from "express";
import { HttpErrorStatus } from "../types/types.ts";  
import * as eventService from "../services/evento.services.ts";

export const geteventById = async (req: Request, res: Response) => {
  try {
    const evento = await eventService.getAllevent();
    res.json(evento);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al obtener usuarios",
      error,
    });
  }
};


export const createevent = async (req: Request, res: Response) => {
  try {
    const { id, title, description, date,location,capacity,organizadorld} = req.body;

    if (!id || !title || !description || !date || !location || !capacity || !organizadorld) {
      return res
        .status(HttpErrorStatus.BAD_REQUEST) 
        .json({ message: "Todos los campos son requeridos" });
    }

    const newevento = await eventService.createevent({
      
        title,
        description,
        date,
        location,
        capacity,
        organizadorld
    });

    res.status(201).json(newevento);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al crear usuario",
      error,
    });
  }
};

export const getAllevent = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const evento = await eventService.geteventById(Number(id));

    if (!evento) {
      return res
        .status(HttpErrorStatus.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }

    res.json(evento);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al obtener usuario",
      error,
    });
  }
};

export const updateevent = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const updatedevent = await eventService.updateevent(Number(id), req.body);

    if (!updatedevent) {
      return res
        .status(HttpErrorStatus.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }

    res.json(updatedevent);
  } catch (error) {
    res.status(HttpErrorStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error al actualizar usuario",
      error,
    });
  }
};

export const deleteevent = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const deletedevento = await eventService.deleteevent(Number(id));

    if (!deletedevento) {
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