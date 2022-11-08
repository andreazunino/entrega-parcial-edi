import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
    obtenerProducto() : string {
        return 'Producto 1';
    
  }
    crearProducto() : string {
        return 'Ahora el producto 1 se llama Producto 7';

  }
}


