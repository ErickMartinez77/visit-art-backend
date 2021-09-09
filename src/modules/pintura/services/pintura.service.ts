/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PinturaDto } from 'src/dto/PinturaDto';
import { Pintura, PinturaDocument } from 'src/schema/pintura.schema';

@Injectable()
export class PinturaService {
    constructor(
        @InjectModel('Pintura') private readonly pinturaModel: Model<PinturaDocument>,
    ) { }

    async guardarPintura(pinturaDto: PinturaDto): Promise<Pintura> {
        const pintura = new this.pinturaModel(pinturaDto);
        return pintura.save();

    }

    async obtenerPinturas(): Promise<Array<Pintura>> {
        return this.pinturaModel.find().exec();

    }

    async obtenerPintura(tituloPintura: string): Promise<Array<Pintura>> {
        return this.pinturaModel.find({ titulo: { "$regex": tituloPintura } }).exec();

    }

    async obtenerPinturaId(idPintura: string): Promise<Pintura> {
        return await this.pinturaModel.findById(idPintura); 
    }

    async obtenerPinturasSeccion(seccion: string): Promise<Array<Pintura>> {
        const totalPinturas = await this.pinturaModel.find();
        let pinturas: Pintura[] = [];
        for (var i = 0; i < (await totalPinturas).length; i++) {
            const pintura: Pintura = totalPinturas[i];
            const secciones = pintura.secciones;
            for (var j = 0; j < secciones.length; j++) {
                const seccionPintura = secciones[j];
                if (seccionPintura == seccion) {
                    pinturas.push(pintura);
                    break;
                }
            }
        }
        return pinturas;
    }

    async actualizarPintura(id: string, pinturaDto: PinturaDto): Promise<Pintura> {
        return await this.pinturaModel.findByIdAndUpdate(id, pinturaDto, { new: true });
    }

    async eliminarPintura(id: string): Promise<PinturaDocument> {
        return this.pinturaModel.findByIdAndDelete(id);
    }
}
