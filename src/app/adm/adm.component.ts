import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
  }

  usuarios:any = []

  // mostrarUsuarios():void{
  //   this.service.getUsuarios().subscribe(data => 
  //     {
  //       this.usuarios = data
  //       console.log(this.usuarios)
  //     })
  // }

}