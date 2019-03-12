import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interface/info-pagina.interface';
import { InfoEquipo } from '../interface/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
 
  public equipo:InfoEquipo[]=[];
  public info:InfoPagina={};
  public cargada:boolean=true;

  constructor( private http: HttpClient ) { 

      this.cargarInfo();
      this.cargarEquipo();
    
  }

  private cargarInfo(){

    console.log('Servicio de pagina cargada');
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp:InfoPagina)=>{
          
             this. info=resp;
            // this.cargada=false;
        },
         error=>{ 
         // this.cargada=true;
          console.log(<any> error);
          });
      
  }
  
    private cargarEquipo(){
      //this.cargada=true;
      this.http.get("https://angular-html-88880.firebaseio.com/equipo.json")
          .subscribe((resp:InfoEquipo[])=>{
           
            this.cargada=false;
              this.equipo=resp;
            //  console.log(this.equipo);

          },
          error=>{
            this.cargada=false;
            console.log(<any> error);
          });
          this.cargada=false;
    }
}
