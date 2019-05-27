import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Models
import { Follow } from '../../../models/follow';
import { Message } from '../../../models/message';

//Services
import { FollowService } from '../../../services/follow.service';
import { MessageService } from '../../../services/message.service';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';

@Component({
	selector:'sended',
	templateUrl: './sended.component.html',
	providers:[FollowService, MessageService, UserService]
})

export class SendedComponent implements OnInit{
	public title: string;
	public message: Message;
	public identity;
	public loading;
	public token;
	public url: string;
	public status: string;	
	public messages: Message[];
	public pages;
	public total;
	public page;
	public next_page;
	public pre_page;

	constructor(
		private _route:ActivatedRoute,
		private _router: Router,
		private _followService: FollowService,
		private _messageService: MessageService,
		private _userService: UserService

	){
		this.title = 'Mensajes enviados a: ';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.loading = true;

	}

	ngOnInit(){
		console.log('sended.component cargado');
		this.actualPage();
	}

	actualPage(){
		this._route.params.subscribe(params =>{
			let page = +params['page']; //recogemos la pagina como entero
			this.page = page;

			if(!params['page']){
				page = 1;
			}

			if(!page){
				page = 1;
			}else{
				this.next_page = page + 1;
				this.pre_page = page - 1;

				if(this.pre_page <= 0){
					this.pre_page = 1;
				}
			}
			this.getMessages(this.token, this.page);
		});
	}
	/*Author: Hernan Mitchel Camacho Valdez*/

	getMessages(token, page){
		this._messageService.getEmmitMessages(token, page).subscribe(
				response =>{
					if(!response.messages){
						this.status = 'error';
					}else{
						this.messages = response.messages;
						this.total = response.total;
						this.pages = response.pages;
						this.loading = false;	
					}
				}, error =>{
					var errorMessage = <any>error;
					console.log(errorMessage);
		
					if(errorMessage != null){
						this.status = 'error';
					}
			}); ;
	}
}