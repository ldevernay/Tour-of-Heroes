import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: [ './heroes.component.css' ],
  templateUrl: './heroes.component.html',
  })
  export class HeroesComponent implements OnInit  {
    title = 'Tour of Heroes';
    hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    };
    constructor(private heroService: HeroService) { };
    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    ngOnInit(): void {
      this.getHeroes();
    }
  }
