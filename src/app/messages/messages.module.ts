//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';


//Rutas
import { MessagesRoutingModule } from './messages-routing.module';

//Componentes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ReceivedComponent } from './components/received/received.component';
import { SendedComponent } from './components/sended/sended.component';
/*Author: Hernan Mitchel Camacho Valdez*/

//servicios
import { UserGuard } from '../services/user.guard';
import { UserService } from '../services/user.service';

@NgModule({
	declarations:[
		MainComponent,
		AddComponent,
		ReceivedComponent,
		SendedComponent

	],
	imports:[
		CommonModule,
		FormsModule,
		MessagesRoutingModule,
		MomentModule

	],
	exports:[
		MainComponent,
		AddComponent,
		ReceivedComponent,
		SendedComponent

	],
	providers:[
		UserGuard,
		UserService

	]
})
export class MessagesModule{}