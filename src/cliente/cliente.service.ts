import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
    obtenerCliente() : string {
        return 'Roberto Perez';
    }
}
