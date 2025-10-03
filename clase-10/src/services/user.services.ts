import { Users } from "../models/users.model.ts";
import  { type IUser } from "../interfaces/user.interface.ts";




export const getAllUsers = async (): Promise<Users[]> => {
  return await Users.findAll();
};

export const getUserById = async (id: number): Promise<Users | null> => {
  return await Users.findByPk(id);
};

export const createUser = async (data: Omit<IUser, "id">): Promise<Users> => {
  return await Users.create(data);
};


export const updateUser = async (
  id: number,
  data: Partial<IUser>
): Promise<Users | null> => {
  const user = await Users.findByPk(id);
  if (!user) return null;

  await user.update(data);
  return user;
};

export const deleteUser = async (id: number): Promise<boolean> => {
  const user = await Users.findByPk(id);
  if (!user) return false;

  await user.destroy();
  return true;
};
