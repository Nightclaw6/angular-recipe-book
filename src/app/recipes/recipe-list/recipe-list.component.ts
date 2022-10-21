import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test description', 'https://lifemadesweeter.com/wp-content/uploads/Steak-and-Potatoes-Recipe-Picture-Photo-1-of-1-500x500.jpg'),
    new Recipe('Test Recipe', 'This is a test description', 'https://lifemadesweeter.com/wp-content/uploads/Steak-and-Potatoes-Recipe-Picture-Photo-1-of-1-500x500.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
