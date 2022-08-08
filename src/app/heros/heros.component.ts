import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {Heroes} from '../mock-heroes'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes = Heroes;
  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  hero:Hero = {
    id:1,
    name:"Windstrom",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
