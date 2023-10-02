

import { Component, OnInit } from '@angular/core';
import { DatosRegionalesService } from 'src/app/services/datos-regionales.service';

@Component({
  selector: 'app-lista-regiones',
  templateUrl: './lista-regiones.component.html',
  styleUrls: ['./lista-regiones.component.scss'],
})
export class ListaRegionesComponent  implements OnInit {


  regiones: any[] = [];


  constructor(private datosRegionalesServices: DatosRegionalesService) { }

  ngOnInit() {
    this.obtenerRegiones();
  }
  

  obtenerRegiones(){
    this.datosRegionalesServices.obtenerRegiones().subscribe(
      (data) => {
        this.regiones = data.data;
      },
      (error) =>{
        console.error('Error al obtener las regiones:',error)
      }
    );
  }

}

