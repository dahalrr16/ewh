import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouterLinkActive} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MaterialsComponent } from './materials/materials.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const appRoutes:Routes=[
  // {path:'**', component:LoginComponent},
  {path:'', redirectTo: 'about', pathMatch: 'full'},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'materials', component:MaterialsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MaterialsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
