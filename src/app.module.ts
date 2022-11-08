import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './productos/productos.service';
import { ProductosController } from './productos/productos.controller';
import { ClienteService } from './cliente/cliente.service';
import { ClienteController } from './cliente/cliente.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductosController, ClienteController],
  providers: [AppService, ProductosService, ClienteService],
})
export class AppModule {}
