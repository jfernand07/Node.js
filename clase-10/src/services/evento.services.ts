import { eventos } from "../models/evento.model.ts";

import  { type Ievento } from "../interfaces/evento.interface.ts";



export const getAllevent = async (): Promise<eventos[]> => {
  return await eventos.findAll();
};

export const geteventById = async (id: number): Promise<eventos | null> => {
  return await eventos.findByPk(id);
};

export const createevent = async (data: Omit<Ievento, "id">): Promise<eventos> => {
  return await eventos.create(data);
};


export const updateevent = async (
  id: number,
  data: Partial<Ievento>
): Promise<eventos | null> => {
  const evento = await eventos.findByPk(id);
  if (!evento) return null;

  await evento.update(data);
  return evento;
};

export const deleteevent = async (id: number): Promise<boolean> => {
  const evento = await eventos.findByPk(id);
  if (!evento) return false;

  await evento.destroy();
  return true;
};