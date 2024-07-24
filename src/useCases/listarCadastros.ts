import { Request, Response } from "express";

export async function listarCadastros(req:Request, res:Response){
    res.send({Message: "ta funcionando "})
}