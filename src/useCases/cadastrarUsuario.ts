import { Request, Response } from "express";

export async function cadastrarUsuario(req:Request, res:Response){
    const {nome, senha} = req.body
    console.log(senha)
    res.send({Message: nome})
}