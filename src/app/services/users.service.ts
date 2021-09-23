import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  // Función que retorna la informacion de los usuarios (lista)
  async getUsers() {
    return await fetch(`${environment.api_url}/getUsers`);
  };
}
