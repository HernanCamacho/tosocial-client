import { Component, OnInit } from '@angular/core';

@Component({
	selector:'culture',
	templateUrl: './culture.component.html'
})

export class CultureComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Cultura en Colima'
	}

	ngOnInit(){
		console.log('culture.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/

}

