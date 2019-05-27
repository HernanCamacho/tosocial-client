import { Component, OnInit } from '@angular/core';

@Component({
	selector:'adventure',
	templateUrl: './adventure.component.html'
})

export class AdventureComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Aventura en Colima'
	}

	ngOnInit(){
		console.log('adventure.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/
}

