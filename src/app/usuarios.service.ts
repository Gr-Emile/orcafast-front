import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }


  getUsuarios(){
    return this.http.get('http://localhost:3000/usuarios')
  }

  getUmUsuario(id:number){
    return this.http.get(`http://localhost:3000/usuarios/${id}`)
  }
}