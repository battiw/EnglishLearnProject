import dotenv from "dotenv";

dotenv.config({
  path: new URL("../../.env", import.meta.url),
});

export const config = {
  PORT: process.env["PORT"],
  NODE_ENV: process.env["NODE_ENV"],
};
