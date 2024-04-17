import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { IconService } from './services/icon.service';


import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    FormsModule, 
    MenuComponent,
  ],
  providers: [
    IconService,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dashboard';
  constructor(private firestore: AngularFirestore) {}
  guardarDatos(nombre: string, apellido: string, edad: string, correo: string) {
    const edadNumber = parseInt(edad);
    this.firestore.collection('usuarios').add({
      nombre: nombre,
      apellido: apellido,
      edad: edadNumber,
      correo: correo
    })
    
    .then(() => {
      console.log('Datos guardados correctamente en Firestore');
      console.log('evento');
    })
    .catch(error => {
      console.error('Error al guardar datos en Firestore:', error);
    });
  }
}