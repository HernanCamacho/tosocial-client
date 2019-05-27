import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'view',
	templateUrl: './view.components.html',
	providers: [UserService]
})
export class viewBusinessComponent implements OnInit{
	public title: string;
	public status: string;
	public user: User;
	public identity;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.title = 'Ve qué están compartiendo los negocios cercanos a ti.';
		this.identity = this._userService.getIdentity();
	}

	ngOnInit(){
		console.log('Business.component cargado correctamente');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/
}