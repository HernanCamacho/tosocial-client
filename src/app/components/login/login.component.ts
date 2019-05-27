import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
 
@Component({
	selector:'login',
	templateUrl: './login.component.html',
	providers: [UserService]
})

export class LoginComponent implements OnInit{

	public title: string;
	public user:User;
	public status:string;
	public identity;
	public token;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.title = 'Identifícate';
		this.user = new User("","","","","","","","");
	}

	ngOnInit(){
		console.log('Componente de login cargado!');
	}

	onSubmit(){
		// console.log(this.user);
		// Loguear al usuario y conseguir sus datos
		this._userService.signup(this.user).subscribe(
			response =>{
				// console.log(response.user);
				this.identity = response.user;
				console.log(this.identity);
				if(!this.identity || !this.identity._id){
					this.status ='error';
				}else{
					//persistir los datos
					localStorage.setItem('identity', JSON.stringify(this.identity));
					//conseguir el token
					this.getToken();
				}

			}, error =>{
				var errorMessage = <any>error;
				console.log(errorMessage);
				if(errorMessage != null){
					this.status = 'Error we';
				}
			});
	} 

	getToken(){
		this._userService.signup(this.user, 'true').subscribe(
		response =>{
			// console.log(response.user);
			this.token = response.token;
			console.log(this.token);
			if(this.token.length <=0){
				this.status ='error';
			}else{
				/*Author: Hernan Mitchel Camacho Valdez*/
				//persistir el token del usuario
				localStorage.setItem('token',this.token);
				//conseguir los contadores o estadisticas del usuario
				this.getCounters();


			}

		},  error =>{
				var errorMessage = <any>error;
				console.log(errorMessage);
				if(errorMessage != null){
				this.status = 'Error we';
			}
		});
	}

	getCounters(){
		this._userService.getCounters().subscribe(
			response =>{
				// console.log(response);
				localStorage.setItem('stats', JSON.stringify(response));
				this.status = 'success'; 
				this._router.navigate(['/']);
			},
			error => {
				console.log(<any>error);
			}
		)
	}

	
}