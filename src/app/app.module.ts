import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

const mesRoutes = [
{path: 'list', component: ComptesListComponent},
{path: 'add', component: ComptesAddComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'delete/:id', component: ComptesDeleteComponent},
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
    ComptesDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
