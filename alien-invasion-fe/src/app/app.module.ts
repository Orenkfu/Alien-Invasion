import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './layout/members/members.component';
import { AuthComponent } from './layout/auth/auth.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './sidebar/nav-menu/nav-menu.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { AlienListComponent } from './pages/alien-dashboard/alien-list/alien-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';
import { AlienService } from './services/alien.service';
import { AlienDashboardComponent } from './pages/alien-dashboard/alien-dashboard.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { CreateAlienComponent } from './pages/create-alien/create-alien.component';
import { HomeComponent } from './pages/home/home.component';
import { ReadmeComponent } from './pages/readme/readme.component';
import { AlienPortalComponent } from './pages/alien-portal/alien-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    AuthComponent,
    SidebarComponent,
    NavMenuComponent,
    SignInComponent,
    AlienListComponent,
    AlienDashboardComponent,
    TitlecasePipe,
    CreateAlienComponent,
    HomeComponent,
    ReadmeComponent,
    AlienPortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatSidenavModule,
  ],
  providers: [ UserService, AlienService, { provide: Window, useValue: window } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
