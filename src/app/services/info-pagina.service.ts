import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  public info:InfoPagina={};
  public cargada:boolean=false;
  constructor( private http: HttpClient ) { 
    console.log('Servicio de pagina cargada');
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp:InfoPagina)=>{
          this.cargada=true;
             this. info=resp;
        },
         error=>{ 
          this.cargada=false;
          console.log(<any> error);
          });
  }
  
}
