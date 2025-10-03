import { inscripcion } from "../models/inscripcion.model.ts";

import  { type INInscripcion } from "../interfaces/inscripcion.interface.ts";



export const getAllinscripcion = async (): Promise<inscripcion[]> => {
  return await inscripcion.findAll();
};

export const getinscripcionById = async (id: number): Promise<inscripcion | null> => {
  return await inscripcion.findByPk(id);
};

export const createinscripcion = async (data: Omit<INInscripcion, "id">): Promise<inscripcion> => {
  return await inscripcion.create(data);
};


export const updateinscripcion = async (
  id: number,
  data: Partial<INInscripcion>
): Promise<inscripcion | null> => {
  const inscripciones = await inscripcion.findByPk(id);
  if (!inscripciones) return null;

  await inscripciones.update(data);
  return inscripciones;
};

export const deleteinscripcion = async (id: number): Promise<boolean> => {
  const inscripciones = await inscripcion.findByPk(id);
  if (!inscripciones) return false;

  await inscripciones.destroy();
  return true;
};