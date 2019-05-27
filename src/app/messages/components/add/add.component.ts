import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Models
import { Follow } from '../../../models/follow';
import { Message } from '../../../models/message';
import { User } from '../../../models/user';


//Services
import { FollowService } from '../../../services/follow.service';
import { MessageService } from '../../../services/message.service';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';

@Component({
	selector:'add',
	templateUrl: './add.component.html',
	providers:[FollowService,MessageService, UserService]
})

export class AddComponent implements OnInit{
	public title: string;
	public message: Message;
	public identity; 
	public token;
	public url: string;
	public status: string;	
	public follows;
	public total;
	public users: User[];
	public pages;
	public page;

	constructor(
		private _route:ActivatedRoute,
		private _router: Router,
		private _followService: FollowService,
		private _messageService: MessageService,
		private _userService: UserService

	){
		this.title = 'Enviar mensaje';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.message = new Message("", "", "", "", this.identity._id, "");

	}

	ngOnInit(){
		console.log('add.component cargado');
		this.getMyFollows();
		this.getUsers(this.page=1);
	}/*Author: Hernan Mitchel Camacho Valdez*/

	onSubmit(form){
		// console.log(this.message);
		this._messageService.addMessage(this.token, this.message).subscribe(
				response =>{
					if(response.message){
						this.status = 'success';
						form.reset();
					}
				}, error =>{
					var errorMessage = <any>error;
					console.log(errorMessage);
		
					if(errorMessage != null){
						this.status = 'error';
					}
			}); 
	}

	getMyFollows(){
		this._followService.getMyFollows(this.token).subscribe(
			response =>{
				this.follows = response.follows;
			}, error =>{
				var errorMessage = <any>error;
				console.log(errorMessage);
	
				if(errorMessage != null){
					this.status = 'error';
				}
			});
	}
	getUsers(page){
		this._userService.getUsers(page).subscribe(response =>{

			if(!response.users){
				this.status = 'error';

			}else{
				this.total = response.total;
				this.users = response.users;
				this.pages = response.pages;
				this.follows = response.users_following;
				

				if(page > this.pages){
					this._router.navigate(['/gente', 1]);
				}
			}

		}, error =>{
			var errorMessage = <any>error;
			console.log(errorMessage);

			if(errorMessage != null){
				this.status = 'error';
			}
		});
	}
}