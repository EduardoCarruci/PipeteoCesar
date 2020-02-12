import { Injectable } from '@nestjs/common';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepository: Repository<Mensaje>,
  ) {}

  async getAll(): Promise<Mensaje[]> {
    return await this.mensajeRepository.find();
  }
  async getMensaje(id: number): Promise<Mensaje> {
    const mensaje = await this.mensajeRepository.findOne(id);
    return mensaje;
  }

  async createMensaje(mensajaNuevo: CreateMensajeDto): Promise<Mensaje> {
    const nuevo = new Mensaje();
    nuevo.mensaje = mensajaNuevo.mensaje;
    nuevo.nick = mensajaNuevo.nick;

    return this.mensajeRepository.save(nuevo);
  }

  async updateMensaje(
    mensajeActualizar: CreateMensajeDto,
    idMensaje: number,
  ): Promise<Mensaje> {
    const mensajeUpdate = await this.mensajeRepository.findOne(idMensaje);
    mensajeUpdate.nick = mensajeActualizar.nick;
    mensajeUpdate.mensaje = mensajeActualizar.mensaje;

    return await this.mensajeRepository.save(mensajeUpdate);
  }

  async deleteMensaje(idMensaje: number): Promise<any> {
    return await this.mensajeRepository.delete(idMensaje);
  }
}
