import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes

import { LoginComponent } from './components/login/login.component'; 
import { RegisterComponent } from './components/register/register.component'; 
import { HomeComponent } from './components/home/home.component';
import { ArchComponent } from './components/archeology/archeology.component';
import { AdventureComponent } from './components/adventure/adventure.component';
import { CultureComponent } from './components/culture/culture.component';
import { BeachComponent } from './components/beach/beach.component';
import { EcoturismComponent } from './components/ecoturism/ecoturism.component';
import { GolfComponent } from './components/golf/golf.component';
import { HistoryComponent } from './components/history/history.component';
import { GastronomyComponent } from './components/gastronomy/gastronomy.component';
import { ColimaComponent } from './components/colima/colima.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponents } from './components/users/users.component';
import { BusinessComponent } from './components/business/business.component';
import { viewBusinessComponent } from './components/viewbusiness/view.components';
import { TimelineComponent } from './components/timeline/timeline.component'
import { ProfileComponent } from './components/profile/profile.component';
import { MapsrComponent } from './components/maps/mapsr.component';
import { MapspComponent } from './components/maps/mapsp.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowedComponent } from './components/followed/followed.component';
/*Author: Hernan Mitchel Camacho Valdez*/
//services

import { UserGuard } from './services/user.guard';

const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'arqueologia', component: ArchComponent },
   { path: 'aventura', component: AdventureComponent },
   { path: 'cultura', component: CultureComponent },
   { path: 'playas', component: BeachComponent },
   { path: 'ecoturismo', component: EcoturismComponent },
   { path: 'golf', component: GolfComponent },
   { path: 'historia', component: HistoryComponent },
   { path: 'gastronomia', component: GastronomyComponent },
   { path: 'colima', component: ColimaComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegisterComponent }, 
   { path: 'reg-negocios', component: BusinessComponent }, 
   { path: 'negocios', component: viewBusinessComponent }, 
   { path: 'mapas', component: MapsrComponent},
   { path: 'mapas/1', component: MapspComponent},
   { path: 'mis-datos', component: UserEditComponent, canActivate:[UserGuard] },
   { path: 'gente', component: UsersComponents, canActivate:[UserGuard] },
   { path: 'gente/:page', component: UsersComponents, canActivate:[UserGuard] },
   { path: 'timeline', component: TimelineComponent, canActivate:[UserGuard] },
   { path: 'perfil/:id', component: ProfileComponent, canActivate:[UserGuard] },
   { path: 'siguiendo/:id/:page', component: FollowingComponent, canActivate:[UserGuard] },
   { path: 'seguidores/:id/:page', component: FollowedComponent, canActivate:[UserGuard] },
   { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

