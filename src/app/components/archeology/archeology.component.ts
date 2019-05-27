import { Component, OnInit } from '@angular/core';

@Component({
	selector:'archeology',
	templateUrl: './archeology.component.html'
})

export class ArchComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Arqueología de Colima'
	}

	ngOnInit(){
		console.log('archeology.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/

}

