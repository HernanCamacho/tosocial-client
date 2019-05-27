//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { MomentModule } from 'angular2-moment';

//Modulo Mensajeria
import { MessagesModule } from './messages/messages.module';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ArchComponent } from './components/archeology/archeology.component';
import { CultureComponent } from './components/culture/culture.component';
import { BeachComponent } from './components/beach/beach.component';
import { EcoturismComponent } from './components/ecoturism/ecoturism.component';
import { AdventureComponent } from './components/adventure/adventure.component';
import { GolfComponent } from './components/golf/golf.component';
import { HistoryComponent } from './components/history/history.component';
import { GastronomyComponent } from './components/gastronomy/gastronomy.component';
import { ColimaComponent } from './components/colima/colima.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponents } from './components/users/users.component';
import { BusinessComponent } from './components/business/business.component';
import { viewBusinessComponent } from './components/viewbusiness/view.components';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TimelineComponent } from './components/timeline/timeline.component'
import { PublicationsComponent } from './components/publications/publications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MapsrComponent } from './components/maps/mapsr.component';
import { MapspComponent } from './components/maps/mapsp.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowedComponent } from './components/followed/followed.component';
/*Author: Hernan Mitchel Camacho Valdez*/
// servicios
import { UserService } from './services/user.service';
import { UserGuard } from './services/user.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ArchComponent,
    AdventureComponent,
    CultureComponent,
    BeachComponent,
    EcoturismComponent,
    GolfComponent,
    HistoryComponent,
    GastronomyComponent,
    ColimaComponent,
    UserEditComponent,
    UsersComponents,
    BusinessComponent,
    viewBusinessComponent,
    SidebarComponent,
    TimelineComponent,
    PublicationsComponent,
    ProfileComponent,
    MapsrComponent,
    MapspComponent,
    FollowingComponent,
    FollowedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    MomentModule,
    MessagesModule
  ],
  providers: [
    appRoutingProviders,
    UserService,
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
