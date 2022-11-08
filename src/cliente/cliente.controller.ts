import { Controller , Get } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('api/edi')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    getCliente(): string {
        return this.clienteService.obtenerCliente();
    }
}
