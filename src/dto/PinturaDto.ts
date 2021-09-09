/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
export class PinturaDto {
    @ApiProperty({
        example: 'La Mona Lisa',
        description: 'Título de la Pintura'
    })
    titulo: string;
    @ApiProperty({
        example: 'Obra pintórica hecha por Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI',
        description: 'Descripción de la Pintura'
    })
    descripcion: string;
    @ApiProperty({
        example: '500.000$',
        description: 'Precio de la Pintura'
    })
    precio: string;
    @ApiProperty({
        example: 'https://es.wikipedia.org/wiki/La_Gioconda#/media/Archivo:Leonardo_da_Vinci_-_Mona_Lisa_(Louvre,_Paris).jpg',
        description: 'Imagen de la Pintura'
    })
    imagenes: string;
    @ApiProperty({
        example: ['nacional','internacional'],
        description: 'Secciones de las Pinturas'
    })
    secciones: string[]
}