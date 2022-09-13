import { Request, Response } from 'express';

//import Atendimento from '../schemas/atendimento_schema';

import PedidoSchema from '../schemas/PedidoSchema';

class AtendimentoController {
    public async index(req: Request, res: Response): Promise<Response> {
        const atendimentos = await atendimento_schema.find();
        return res.json(atendimentos);
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        await atendimento_schema.find((err: any, atendimentos: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(atendimentos)
            }
        })
    }

    public async get(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        await atendimento_schema.findById(id, (err: any, atendimento: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(atendimento);
            }
        })
    }

    public async add(req: Request, res: Response): Promise<void> {
        let atendimento = new atendimento_schema(req.body);
        await atendimento.save((err: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(atendimento)
            }
        })
    }

    public async delete(req: Request, res: Response): Promise<void> {
        await atendimento_schema.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send("Ok")
            }
        })
    }

    public async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        await atendimento_schema.findByIdAndUpdate(id, req.body, (err: any, atendimento: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(atendimento);
            }
        })
    }



    public async store(req: Request, res: Response): Promise<Response> {
        const atendimento = await atendimento_schema.create(req.body);
        return res.json(atendimento);
    }
}

export default new AtendimentoController();