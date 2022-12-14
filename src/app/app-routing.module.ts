import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmComponent } from './pages/adm/adm.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';

import { AuthGuardAdmService } from './guards/auth-guard-adm.service';
import { AuthGuardUserService } from './guards/auth-guard-user.service';
import { AuthGuardOrcamentoService } from './guards/auth-guard-orcamento.service';
import { PerfilFornecedorComponent } from './pages/perfil-fornecedor/perfil-fornecedor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'perfil/:idusuario',
    component: PerfilComponent,
    canActivate: [AuthGuardUserService]
  },
  {
    path: 'adm',
    component: AdmComponent,
    canActivate: [AuthGuardAdmService]
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [AuthGuardAdmService]
  },
  {
    path: 'catalogo/:idusuario',
    component: CatalogoComponent,
    canActivate: [AuthGuardUserService]
  },
  {
    path: 'orcamento/:idorcamento/:idusuario',
    component: OrcamentoComponent,
    canActivate: [AuthGuardOrcamentoService]
  },
  {
    path: 'perfilFornecedor',
    component: PerfilFornecedorComponent,
    canActivate: [AuthGuardAdmService]
  },
  {
    path: 'perfilFornecedor/:idfornecedor',
    component: PerfilFornecedorComponent,
    canActivate: [AuthGuardAdmService]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
