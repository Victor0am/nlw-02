import db from '../database/conection';
import {Request, Response}from 'express'
interface Schedule {
    week_day: number;
    from: string;
    to: string;
}


export default class ClassesController {
    async index(request: Request, response:Response){
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections[0]

        return response.json({total: total});
    }
    async create(request: Request, response:Response) {
        const {
            user_id
        } = request.body;

        await db('connections').insert({user_id,});

        return response.status(201).send();
    }
}