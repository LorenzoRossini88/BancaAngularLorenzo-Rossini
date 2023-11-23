import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BankComponent } from './bank/bank.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';7
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'banks', component: BankComponent },
  {path: 'login', component: LoginComponent},
  {path: 'userDetail', component: UserDetailComponent},
  {path: 'admin', component: AdminComponent},
  { path: 'welcome/:username', component: WelcomeComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
