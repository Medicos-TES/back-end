import { Request, Response } from "express";
import medicoSchema from "../models/MedicoSchema";

class MedicoController {
  async listar(request: Request, response: Response) {
    try {
      const result = await medicoSchema.find();
      response.status(200).json(result);
    } catch (error) {
      response.status(400).json({
        data: `${error.message}`,
        error: true,
        msg: "Não foi possível efetuar esta busca.",
      });
    }
  }

  async listarPorCrm(request: Request, response: Response) {
    try {
      const { crm } = request.params;
      const result = await medicoSchema.find({ crm: crm });
      response.status(201).json(result);
    } catch (error) {
      response.status(400).json({
        data: `${error.message}`,
        error: true,
        msg: "Erro ao efetuar esta busca.",
      });
    }
  }

  async cadastrar(request: Request, response: Response) {
    try {
      const list = await medicoSchema.find();

      const isListed = list.find((data: any) => data.crm === request.body.crm);

      if (!isListed) {
        const result = await medicoSchema.create(request.body);
        response.status(201).json(result);
      } else {
        response.status(409).json({
          error: true,
          msg: "Erro! Este CRM já está em nossa base de dados.",
        });
      }
    } catch (error) {
      response.status(400).json({
        data: `${error.message}`,
        error: true,
        msg: "Não foi possível efetuar este cadastro.",
      });
    }
  }

  async excluir(request: Request, response: Response) {
    try {
      const { crm } = request.params;
      const result = await medicoSchema.deleteOne({ crm: crm });
      response.status(201).json(result);
    } catch (error) {
      response.status(400).json({
        data: `${error.message}`,
        error: true,
        msg: "Não foi possível concluir essa exclusão.",
      });
    }
  }

  async editar(request: Request, response: Response) {
    try {
      const body = request.body;

      await medicoSchema.findOneAndUpdate({ crm: body.crm }, body, {
        returnOriginal: false,
        useFindAndModify: false,
      });

      response.status(204).json({});
    } catch (error) {
      response.status(400).json({
        data: `${error.message}`,
        error: true,
        msg: "Não foi possível efeturar esta edição cadastral.",
      });
    }
  }
}

export { MedicoController };
