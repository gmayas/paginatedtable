import { Component, EventEmitter, OnInit, ViewChild, AfterViewInit, ElementRef, OnChanges, OnDestroy, Renderer2, TemplateRef, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import * as _ from "lodash";

@Component({
  selector: 'app-pag02',
  templateUrl: './pag02.component.html',
  styleUrls: ['./pag02.component.css']
})
export class Pag02Component implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  // Year
  public yyyy = new Date().getFullYear();

  // Users
  public Users: any;
  public loadingData = false
  public loading = false;
  public confirm = false;
  public columnas: any = [];;
  public data = [];
  public dataSize = 0;
  public dataSource: any = new MatTableDataSource();
  public searchValue: string | any= '' ;
  public pageEvent: PageEvent | any;
  public delUserSel: any = { };

  @ViewChild('accionTemplate', { static: true }) accionTemplate: TemplateRef<any> | any;
  
  constructor(public usersService: UsersService, private toastr: ToastrService,
    private modalService: NgbModal,
    config: NgbModalConfig) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
  
  }

  ngOnInit(): void {
    this.getTableColums();
    this.getUsers();
  }

  ngOnDestroy() {
  
  }

  getTableColums() {
    //this.columns = ['Nombre', 'Email', 'Password'];
    this.columnas = [
      { campo: 'name_user', titulo: 'Nombre', cellTemplate: null },
      { campo: 'email_user', titulo: 'Emial', cellTemplate: null },
      { campo: 'password_user', titulo: 'Password', cellTemplate: null },
      { campo: null, titulo: 'Acciones', cellTemplate: this.accionTemplate },
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

  editUser(user: any) {
    console.log('editUser user', user)
  }

   // Función asincrona para setirar informacion del usuario
   setInfoUser(user: any) {
    try {
      this.loadingData = true;
      console.log('setInfoUser user', user)
      this.toastr.success('Hola, excelente.', 'Aviso de Yaydoo FrontEnd', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      });
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

   // Función asincrona para eliminar la informacion completa del usuario
   async deleteUser() {
    try {
      this.loadingData = true;
      console.log('deleteUser()', true)
      this.toastr.success('Hola, excelente.', 'Aviso de Yaydoo FrontEnd', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      });
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

  open(content: any, user: any) {
    console.log('Open(user)', user)
    this.delUserSel = Object.assign({}, user);
    this.modalService.open(content, { centered: true });
  }
}
