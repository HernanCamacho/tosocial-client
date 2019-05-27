import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { Follow } from '../../models/follow';
import { GLOBAL } from '../../services/global';

@Component({
	selector: 'users',
	templateUrl: './users.component.html',
	providers: [UserService, FollowService]
}) 

export class UsersComponents implements OnInit{
	public title: string;
	public url: string;
	public identity;
	public loading:boolean;
	public token;
	public page;
	public next_page;
	public pre_page;
	public total;
	public pages;
	public users: User[];
	public follows;
	public status: string;

	constructor(
		private _route:ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _followService: FollowService

	){
		this.title = 'Gente';
		this.url = GLOBAL.url;
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.loading = true;
	}

	ngOnInit(){
		console.log('users.component ha sido cargado');
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
			/*Author: Hernan Mitchel Camacho Valdez*/
			//devolver listado de usuarios

			this.getUsers(page);
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
				this.loading = false;

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

	public followUserOver;

	mouseEnter(user_id){
		this.followUserOver = user_id;
	}

	mouseLeave(user_id){
		this.followUserOver = 0;
	}

	followUser(followed){
		var follow = new Follow('', this.identity._id, followed);

		this._followService.addFollow(this.token, follow).subscribe(
			response =>{
				if(!response.follow){
					this.status = 'error';
				}else{
					this.status = 'success';
					this.follows.push(followed);
					// this.loading = false;
				}

			},error =>{
				var errorMessage = <any>error;
				console.log(errorMessage);

				if(errorMessage != null){
					this.status = 'error';
				}
			});

	}

	unfollowUser(followed){
		this._followService.deleteFollow(this.token, followed).subscribe(
			response =>{
				var search = this.follows.indexOf(followed);
				if(search != -1){
					this.follows.splice(search, 1);
				}

			},error =>{
				var errorMessage = <any>error;
				console.log(errorMessage);

				if(errorMessage != null){
					this.status = 'error';
				}
			});
	}

}