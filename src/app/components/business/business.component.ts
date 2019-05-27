import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'business',
	templateUrl: './business.component.html',
	providers: [UserService]
})
export class BusinessComponent implements OnInit{
	public title: string;
	public status: string;
	public user: User;
	public identity;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.title = 'Hagamos crecer juntos a tu negocio.';
		this.identity = this._userService.getIdentity();
	}

	ngOnInit(){
		console.log('Business.component cargado correctamente');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/
}