import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { response } from 'express';

@Controller('mensajes')
export class MensajesController {
  constructor(private mensajeServices: MensajesService) {}
  @Post('/create')
  create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
    this.mensajeServices
      .createMensaje(createMensajeDto)
      .then(mensaje => {
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la creacion del mensaje' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.mensajeServices
      .getAll()
      .then(mensajesList => {
        response.status(HttpStatus.OK).json(mensajesList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la objetcion de mensajes' });
      });
  }
  @Get('/:id')
  async getMensaje(@Res() res, @Param('id') id) {
    const product = await this.mensajeServices.getMensaje(id);
    if (!product) throw new NotFoundException('Mensaje does not exist!');
    return res.status(HttpStatus.OK).json(product);
  }

  //actualizacion e introduccion
  @Put('/edit/:id')
  update(
    @Body() updateMensajeDto: CreateMensajeDto,
    @Res() response,
    @Param('id') idMensaje,
  ) {
    this.mensajeServices
      .updateMensaje(updateMensajeDto, idMensaje)
      .then(mensaje => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la edicion del mensaje' });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') idMensaje) {
    this.mensajeServices
      .deleteMensaje(idMensaje)
      .then(res => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la eliminiacion del mensaje' });
      });
  }
}
