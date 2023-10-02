import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ListaRegionesComponent } from '../components/lista-regiones/lista-regiones.component'; // Importa tu componente
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ListaRegionesComponent // Agrega tu componente a las declaraciones
  ]
})
export class HomePageModule {}
