import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import * as _ from "lodash";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [6, 12, 18 , 24, 30];
  currentIndex: any;
  // Year
  public yyyy = new Date().getFullYear();

  // Users
  public Users: any;
  loadingData = false

  constructor(public usersService: UsersService, private toastr: ToastrService, private http: HttpClient) {
    // Llamado inicial de la funcion
    this.getUsers();
  }

  ngOnInit(): void {
   
  }
  // Función asincrona para obtener el listado de los usuarios
  async getUsers() {
    try {
      this.loadingData = true;
      let response = await this.usersService.getUsers();
      let dataReturn = await response.json()
      this.Users = dataReturn.data;
      this.loadingData = false;
      this.toastr.success('Hola, excelente.', 'Aviso de Yaydoo FrontEnd', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      });
    } catch (e) {
      this.loadingData = false;
      this.toastr.error('Hola, creo que algo salio mal. ', 'Aviso de Yaydoo FrontEnd', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      })
      console.log('Error respose: ', e)
    }
  }


  async getUsersPag() {
    try {
      this.loadingData = true;
      let response = await this.usersService.getUsers();
      let dataReturn = await response.json()
      this.Users = dataReturn.data;
      this.loadingData = false;
    } catch (e) {
      this.loadingData = false;
      this.toastr.error('Hola, creo que algo salio mal. ', 'Aviso de Yaydoo FrontEnd', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      })
      console.log('Error respose: ', e)
    }
  }

  onTableDataChange(event: any){
    this.page = event;
    this.getUsersPag();
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsersPag();
  }  

}
