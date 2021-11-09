import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html'
})
export class ListHeroesComponent implements OnInit {

  public listHeroes: string [] = ['Spiderman', 'Superman', 'Thor'];
  public heroDeleted: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  public deleteHero(): void {

    this.heroDeleted = this.listHeroes.pop() || '';
  }

  public checkHeroDeleted(): boolean {

    return (this.heroDeleted !== '')
  }
}
