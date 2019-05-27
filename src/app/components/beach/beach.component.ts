import { Component, OnInit } from '@angular/core';

@Component({
	selector:'beach',
	templateUrl: './beach.component.html'
})

export class BeachComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Playas en Colima'
	}

	ngOnInit(){
		console.log('beach.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/
}

