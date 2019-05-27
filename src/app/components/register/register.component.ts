import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
	selector:'register',
	templateUrl: './register.component.html',
	providers: [UserService]
})

export class RegisterComponent implements OnInit{

	public title: string;
	public user: User;
	public status: string;
	public identity;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.title = 'Únete a nuestra comunidad';
		this.user = new User("","","","","","","","");
		this.identity = this._userService.getIdentity();
	}

	ngOnInit(){
		console.log('Componente de register cargado!');
	}
	onSubmit(form){
		this._userService.register(this.user).subscribe(response =>{
			if(response.user && response.user._id){
				// console.log(response.user);
				this.status = 'success';
				form.reset();
			}else{
				this.status = 'Error we'
			}
		}, error =>{
			console.log(<any>error);
		});
		/*Author: Hernan Mitchel Camacho Valdez*/

	}
}