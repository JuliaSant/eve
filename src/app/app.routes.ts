import {Routes} from "@angular/router"
import {HomeComponent} from './home/home.component'
import {CadastroComponent} from './cadastro/cadastro.component'
import {LoginComponent} from './login/login.component'
import {CadastroEventoComponent} from './cadastro-evento/cadastro-evento.component'
import {CadastrarConvidadosComponent} from './cadastrar-convidados/cadastrar-convidados.component'
import {CadastrarFuncionariosComponent} from './cadastrar-funcionarios/cadastrar-funcionarios.component'
import {ListFuncComponent} from './list-func/list-func.component'

export const ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'home', component: HomeComponent},
    {path: 'evento', component: CadastroEventoComponent},
    {path: 'convidados', component: CadastrarConvidadosComponent},
    {path: 'funcionario', component: CadastrarFuncionariosComponent},
    {path: 'listaFunc', component: ListFuncComponent},
]