// 1. Para crear una class de typescript usar este comando y se creara(arc/app)
// comando -> (ng g class producto --skip-tests)

export class Producto {
  idProducto: number;
  descripcion: string;
  precio: number;
  existencia: number;
}


// 2. Para q no este en rojo ir a (tsconfig.json) y agregar -> ("strictPropertyInitialization": false,)
