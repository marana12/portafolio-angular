import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdx } from '../interface/info-productos.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url:string;
          cargando=true;
          productos:ProductosIdx[]=[];
  productosFiltrados:ProductosIdx[]=[];

  constructor(private http:HttpClient) 
  { 
    this.url="https://angular-html-88880.firebaseio.com";
    this.cargarProductos();
    
  }

    private cargarProductos(){
        return new Promise((resolve,reject)=>{
          this.http.get(this.url+'/productos_idx.json')
      .subscribe((res:ProductosIdx[])=>{
        this.productos=res;
        this.cargando=false;
        console.log(this.productos);
        resolve();
      },
      error =>{
        console.log(<any>error);
        this.cargando=true;
        
      })
        });
      
  }

  getProductos(id:string)
  {
    return this.http.get(`https://angular-html-88880.firebaseio.com/productos/${id}.json`);
       
  }

  buscarProducto(termino:string){

    if (this.productos.length == 0){
     
      this.cargarProductos()
          .then(()=>{
            this.filtrarProductos(termino);
          });
    }else{
            this.filtrarProductos(termino);
    }

    
  }
  private filtrarProductos(termino:string){
    this.productosFiltrados=[];
    this.productos.forEach(prod=>{
      const titulo=prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>=0 || titulo.indexOf(termino)>=0){
          this.productosFiltrados.push(prod);
      }
    });
  }
}
