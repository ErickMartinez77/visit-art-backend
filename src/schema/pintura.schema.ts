/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PinturaDocument = Pintura & Document

@Schema()
export class Pintura {
    @Prop()
    titulo: string;
    @Prop()
    precio: string;
    @Prop()
    descripcion: string;
    @Prop()
    imagenes: string;
    @Prop()
    secciones: string[];
}

export const PinturaSchema = SchemaFactory.createForClass(Pintura);