import { Ollama } from "ollama";
import "dotenv/config";

let ollama;
export const initialize = () => {
  ollama = new Ollama({ host: process.env.HOST });
};

export const getOllamaInstance = () => {
  return ollama;
};
