/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Req, Res, Query, Put, Delete, HttpStatus, NotFoundException } from '@nestjs/common';
import { PinturaDto } from 'src/dto/PinturaDto';
import { PinturaService } from '../services/pintura.service';

@Controller('pintura')
export class PinturaController {
    constructor(
        private readonly _pinturaService: PinturaService
    ) { }

    @Post()
    async create(@Body() pinturaDto: PinturaDto) {
        return await this._pinturaService.guardarPintura(pinturaDto);
    }

    @Get()
    async buscarPintura() {
        return await this._pinturaService.obtenerPinturas();

    }

    @Get('titulo/:titulo')
    async buscarUnaPintura(@Param('titulo') titulo: string) {
        return await this._pinturaService.obtenerPintura(titulo)

    }

    @Get('/:id')
    async buscarPinturaPorId(@Res() res, @Param('id') pinturaId:string) {
        const pintura = await this._pinturaService.obtenerPinturaId(pinturaId);
        if (!pintura) throw new NotFoundException('La pintura no existe!');
        return res.status(HttpStatus.OK).json(pintura);
    }

    @Get('seccion/:seccion')
    async bucarPorSeccion(@Param('seccion') seccion: string) {
        return await this._pinturaService.obtenerPinturasSeccion(seccion)
    }

    @Put('/:id')
    async update(@Res() res, @Param('id') id: string, @Body() pinturaDto: PinturaDto) {
        const pinturas = await this._pinturaService.actualizarPintura(id, pinturaDto);
        if (!pinturas) throw new NotFoundException('La Pintura no existe');
        return res.status(HttpStatus.OK).json({
            message: 'La Pintura fue actualizada exitosamente',
            pinturas
        });
    }
    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const pinturas = await this._pinturaService.eliminarPintura(id);
        if (!pinturas) throw new NotFoundException('La Pintura no existe');
        return res.status(HttpStatus.OK).json({
            message: 'La Pintura fue eliminada',
            pinturas
        });

    }
}
