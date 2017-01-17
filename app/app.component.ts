import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
	<h2>my name is:{{myhero.name}}</h2>
	<ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name}}
      </li>
    </ul>
	<p *ngIf="heroes.length > 3">There are many heroes!</p>
	`
})
export class AppComponent {
  title = 'Tour of Heroes';
    //heroes = ['Windstorm','john','cena','rock'];
	//hero = this.heroes[0];
	//title : string;
	//name : string;
	
	//constructor(){
		//this.title='the star';
		//this.name='sun';
		
		heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
myhero = this.heroes[1];
}