import type { Request, Response, NextFunction } from "express";
import { z } from "zod"; 

const userSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio y debe tener al menos 2 caracteres"),
  email: z.string().email("El email no es válido"),
  password: z.string().min(6, "La contraseña debe tener mínimo 6 caracteres"),
});

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      errors: result.error.issues.map(err => ({
        field: err.path[0],
        message: err.message,
      })),
    });
  }

  next();
};
