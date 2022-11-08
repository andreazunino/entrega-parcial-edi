import { Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Get()
    getProducto(): string {
        return this.productosService.obtenerProducto();
    }

    @Post()
    postProducto(): string {
       return this.productosService.crearProducto();
    }
}
