import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComptesAddComponent } from './components/comptes-add/comptes-add.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComptesDeleteComponent } from './components/comptes-delete/comptes-delete.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { LogoutResolver } from './resolvers/logout.resolver';

const mesRoutes = [
{path: 'list', component: ComptesListComponent, canActivate:  [AuthGuard]},
{path: 'add', component: ComptesAddComponent, canActivate:  [AuthGuard]},
{path: 'welcome', component: WelcomeComponent},
{path: 'login', component: LoginComponent},
{path: 'logout', component: WelcomeComponent, resolve: [LogoutResolver]},
{path: 'delete/:id', component: ComptesDeleteComponent, canActivate:  [AuthGuard]},
{path: '', redirectTo: '/welcome', pathMatch: 'full' },
{path: '**',  component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComptesListComponent,
    FooterComponent,
    ComptesAddComponent,
    WelcomeComponent,
    NotFoundComponent,
    ComptesDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [
    LogoutResolver, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
},],
  bootstrap: [AppComponent]
})
export class AppModule { }
