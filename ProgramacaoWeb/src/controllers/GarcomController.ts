import { Request, Response } from 'express';

//import Atendimento from '../schemas/Garcom_Schema';

import GarcomSchema from '../schemas/GarcomSchema';

const Garcom_Schema = require('../schemas/Garcom_Schema');

class AtendimentoController {
    public async index(req: Request, res: Response): Promise<Response> {
        const atendimentos = await Garcom_Schema.find();
        return res.json(atendimentos);
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        await Garcom_Schema.find((err: any, atendimentos: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(atendimentos)
            }
        })
    }

    public async get(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        await Garcom_Schema.findById(id, (err: any, atendimento: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(atendimento);
            }
        })
    }

    public async add(req: Request, res: Response): Promise<void> {
        let atendimento = new Garcom_Schema(req.body);
        await atendimento.save((err: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(atendimento)
            }
        })
    }

    public async delete(req: Request, res: Response): Promise<void> {
        await Garcom_Schema.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send("Ok")
            }
        })
    }

    public async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        await Garcom_Schema.findByIdAndUpdate(id, req.body, (err: any, atendimento: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(atendimento);
            }
        })
    }



    public async store(req: Request, res: Response): Promise<Response> {
        const atendimento = await Garcom_Schema.create(req.body);
        return res.json(atendimento);
    }
}

export default new AtendimentoController();