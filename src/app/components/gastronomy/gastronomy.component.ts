import { Component, OnInit } from '@angular/core';

@Component({
	selector:'gastronomy',
	templateUrl: './gastronomy.component.html'
})

export class GastronomyComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Gastronomía'
	}

	ngOnInit(){
		console.log('gastronomy.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/

}

