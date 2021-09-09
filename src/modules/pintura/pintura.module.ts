/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pintura, PinturaSchema } from 'src/schema/pintura.schema';
import { PinturaController } from './controllers/pintura.controller';
import { PinturaService } from './services/pintura.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Pintura.name, schema: PinturaSchema }])
    ],
    controllers: [
        PinturaController],
    providers: [
        PinturaService]
})
export class PinturaModule { }
