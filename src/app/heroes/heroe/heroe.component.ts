import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

  // titulo: string = 'Heroe List'
  nombre: string = 'Batman';
  edad: number = 46

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarNombre(): void {
    this.nombre= 'Spiderman';
  }

  cambiarEdad():void {
    this.edad = 25;
  }

}
