import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnChanges, OnDestroy, Renderer2, TemplateRef, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import * as _ from "lodash";

@Component({
  selector: 'app-pag02',
  templateUrl: './pag02.component.html',
  styleUrls: ['./pag02.component.css']
})
export class Pag02Component implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  //
  // Year
  public yyyy = new Date().getFullYear();

  // Users
  public Users: any;
  public loadingData = false
  public columns: Array<any> | any;
  public data = [];
  public dataSize = 0;
  public dataSource: any = new MatTableDataSource([]);
  public searchValue: string = '';

  
  constructor(public usersService: UsersService, private toastr: ToastrService) {
    // Llamado inicial de la funcion
    this.getTableColums();
    this.getUsers();

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngAfterViewInit(): void {
  
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  
  }

  getTableColums() {
    this.columns = [
      { campo: 'name_user', titulo: 'Nombre', cellTemplate: null },
      { campo: 'email_user', titulo: 'Email', cellTemplate: null },
      { campo: 'password_user', titulo: 'Password', cellTemplate: null }
    ];
  }

  // Función asincrona para obtener el listado de los usuarios
  async getUsers() {
    try {
      this.loadingData = true;
      let response = await this.usersService.getUsers();
      let dataReturn = await response.json()
      this.Users = dataReturn.data;
      this.dataSource = new MatTableDataSource(this.Users);
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
      this.dataSource = new MatTableDataSource(this.Users);
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
}