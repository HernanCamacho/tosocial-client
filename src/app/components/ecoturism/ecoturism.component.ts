import { Component, OnInit } from '@angular/core';

@Component({
	selector:'ecoturism',
	templateUrl: './ecoturism.component.html'
})

export class EcoturismComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Ecoturismo en Colima'
	}

	ngOnInit(){
		console.log('ecoturism.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/

}

