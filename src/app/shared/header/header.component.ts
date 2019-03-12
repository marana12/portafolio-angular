import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _service:InfoPaginaService,
  			   private router:Router ) { }

  ngOnInit() {
  }
  buscarTexto(texto:string){
  	let termino:string =texto.toLowerCase();
  	if(termino.length<1){
  		return;
  	}
  	this.router.navigate(['/search',termino]);
  	
  }

}
