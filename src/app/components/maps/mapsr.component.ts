import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

@Component({
	selector: 'mapsr',
	templateUrl: './mapsr.component.html',
	providers: [UserService]
})
export class MapsrComponent implements OnInit{
	public title: string;
	public user: User;
	public status: string;
	public identity;
	public token;
	public stats;
	public url;
	/*Author: Hernan Mitchel Camacho Valdez*/

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService

	){
		this.title = 'Mapa';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
	}

	ngOnInit(){
		console.log('mapasr.component cargado correctamente');
	}

}