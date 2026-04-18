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
      'Hola, quiero contratar el servicio de raspados para un evento en Santa Cruz.'
    );
    return `https://wa.me/${phone}?text=${message}`;
  }
}