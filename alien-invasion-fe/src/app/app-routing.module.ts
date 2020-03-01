import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './layout/members/members.component';
import { AuthComponent } from './layout/auth/auth.component';
import { CharacterCreationComponent } from './pages/auth/character-creation/character-creation.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { AlienDashboardComponent } from './pages/alien-dashboard/alien-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateAlienComponent } from './pages/create-alien/create-alien.component';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    data: { title: "Authentication" },
    children: [
      {
        path: "",
        component: SignInComponent,
        data: { title: "Sign In" }
      },
      {
        path: "character-creation",
        component: CharacterCreationComponent,
        data: { title: "Create Character" }

      }
    ]
  },
  {
    path: "members",
    component: MembersComponent,
    canActivateChild: [ AuthGuard ],
    data: { title: "Home" },
    children: [
      {
        path: "dashboard",
        component: AlienDashboardComponent,
        data: { title: "Dashboard" }
      },
      {
        path: "create",
        component: CreateAlienComponent,
        data: { title: "Create Alien" }
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: AuthGuard,
    } 
  ]
})
export class AppRoutingModule { }
