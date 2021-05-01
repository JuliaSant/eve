import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { CadastrarConvidadosComponent } from './cadastrar-convidados/cadastrar-convidados.component';
import { CadastrarFuncionariosComponent } from './cadastrar-funcionarios/cadastrar-funcionarios.component';
import { ListFuncComponent } from './list-func/list-func.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroComponent,
    HomeComponent,
    LoginComponent,
    CadastroEventoComponent,
    CadastrarConvidadosComponent,
    CadastrarFuncionariosComponent,
    ListFuncComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
