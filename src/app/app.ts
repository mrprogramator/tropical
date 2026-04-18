import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  whatsappLink(): string {
    const phone = '59164423294';
    const message = encodeURIComponent(
      'Hola! Quisiera reservar el servicio de raspados Tropical para mi evento 🍧'
    );
    return `https://wa.me/${phone}?text=${message}`;
  }
}