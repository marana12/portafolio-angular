import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interface/producto-descripcion.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    public producto:ProductoDescripcion;
    id:string;

  constructor( private route:ActivatedRoute,
               public productoService:ProductosService) { }

  ngOnInit() {
    this.route.params
        .subscribe(parametros=>{
          this.productoService.getProductos(parametros['id'])
              .subscribe((res:ProductoDescripcion)=>{
                    this.producto=res;
                    this.id=parametros['id'];
              },
              error=>{
                console.log(<any> error);
              });
         
        })
  }

}
