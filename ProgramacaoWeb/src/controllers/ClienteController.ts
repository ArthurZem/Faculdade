import { Request, Response } from 'express';

//import Atendimento from '../schemas/Cliente_Schema';
import ClienteSchema from '../schemas/ClienteSchema';

const Cliente_Schema = require('../schemas/Cliente_Schema');

class AtendimentoController {
    public async index(req: Request, res: Response): Promise<Response> {
        const atendimentos = await Cliente_Schema.find();
        return res.json(atendimentos);
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        await Cliente_Schema.find((err: any, atendimentos: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(atendimentos)
            }
        })
    }

    public async get(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        await Cliente_Schema.findById(id, (err: any, atendimento: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(atendimento);
            }
        })
    }

    public async add(req: Request, res: Response): Promise<void> {
        let atendimento = new Cliente_Schema(req.body);
        await atendimento.save((err: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(atendimento)
            }
        })
    }

    public async delete(req: Request, res: Response): Promise<void> {
        await Cliente_Schema.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send("Ok")
            }
        })
    }

    public async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        await Cliente_Schema.findByIdAndUpdate(id, req.body, (err: any, atendimento: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(atendimento);
            }
        })
    }



    public async store(req: Request, res: Response): Promise<Response> {
        const atendimento = await Cliente_Schema.create(req.body);
        return res.json(atendimento);
    }
}

export default new AtendimentoController();