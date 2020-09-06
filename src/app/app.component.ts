import { Component } from '@angular/core';

import { shop  } from "./shop"; // importing the interface which we created in the shop.ts file
import { NumberSymbol } from '@angular/common';
import { stringify } from 'querystring';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string  = 'Shopping App';
   shopValue: string; // the value inside the input text
   list: shop[]; //list to loop after entering ur fav items

  ngOnInit() //lifecycle method , basically how u want it to look when u open the app
  {
    this.list = [];
    this.shopValue="";

  }
 addItem()
 {
   if(this.shopValue != ""){
    const newItem: shop ={
      id:Date.now(),
      value: this.shopValue,
      isDone: false
    };
    this.list.push(newItem);
   }
   this.shopValue="";//clearing the input text
   }
 deleteItem(id:number){

  this.list=this.list.filter(item => item.id != id)


 }   
 }






