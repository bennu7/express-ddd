import dotenv from 'dotenv';
import joi from 'joi';
dotenv.config();

export const { PORT } = process.env;

export const handlingCheckEnv = () => {
  const envSchema = joi.object({
    PORT: joi.number().required(),
  });

  const { error } = envSchema.validate({ PORT });
  if (error) {
    throw new Error(`Config validation ENV error: ${error.message}`);
  }
};
