import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Publication } from '../../models/publication';
import { PublicationService } from '../../services/publication.service';
import { GLOBAL } from '../../services/global';
declare var jQuery: any;
declare var $: any;

@Component({
	selector:'publications',
	templateUrl: './publications.component.html',
	providers: [UserService,PublicationService]
})

export class PublicationsComponent implements OnInit{
	public identity;
	public loading: boolean;
	public token;
	public status:string;
	public title: string;
	public url: string;
	public page;
	public total;
	public itemsPerPage;
	public pages;
	public publications: Publication[];
	@Input() user :string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _publicationService: PublicationService
	){
		this.title = 'Publicaciones';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.page = 1;
		this.loading = true;

	}

	ngOnInit(){
		console.log('El publications.component cargado correctamente');
		this.getPublications(this.user, this.page);
	}

	getPublications(user, page, adding = false){
		this._publicationService.getPublicationsUser(this.token,user, page).subscribe(
			response =>{
				if(response.publications){
					this.total = response.total_items;
					this.pages = response.pages;
					this.itemsPerPage = response.items_per_page;

					if(!adding){
						this.publications = response.publications;
					}else{
						var arrayA = this.publications; //lo que ya tengo
						var arrayB = response.publications; //nuevo array
						this.publications = arrayA.concat(arrayB);
						$("html,body").animate({scrollTop: $('body').prop("scrollHeight")}, 800);
					}
					/*Author: Hernan Mitchel Camacho Valdez*/

					/*if(page > this.pages){
						this._router.navigate(['/home']);
					}*/
					this.loading = false;

				}else{
					this.status = 'error';
				}
;			}, error =>{
				var errorMessage = <any>error;
				console.log(errorMessage);
				if(errorMessage != null){
					this.status = 'error';
				}
			});
	}

	public noMore = false;
	viewMore(){
		this.page += 1;
		if(this.page == this.pages){
			this.noMore = true;
		}
		this.getPublications(this.user, this.page, true);
	}

}