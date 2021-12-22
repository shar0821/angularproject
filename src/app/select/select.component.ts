import { Component, OnInit, Input } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { BuilderBlock } from '@builder.io/angular';
import { SSL_OP_NO_TLSv1_1 } from 'constants';

interface Food {
  value: string;
  viewValue: string;
}


@BuilderBlock({
  tag: 'select',
  name: 'select',
  inputs: [
    {
      name: 'selectlabel',
      type: 'string',
    },
    {
      name: 'selectoption1',
      type: 'string',
    },
    {
      name: 'selectoption2',
      type: 'string',
    },
    {
      name: 'selectoption3',
      type: 'string',
    },
    {
      name: 'selectoption4',
      type: 'string',
    }
  ],
})


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    const var1=document.querySelector('.op1') as HTMLSelectElement;
    const x=var1.querySelector("#option1");
    if(x)
     x.addEventListener('click',(e)=>{this.getInput(e)});
  }
  @Input() selectlabel = 'Select Label';
  @Input() selectoption1 = 'Option 1';
  @Input() selectoption2 = 'Option 2';
  @Input() selectoption3 = 'Option 3';
  @Input() selectoption4 = 'Option 4';
  /*foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];*/
  getInput(e):void {
    e.preventDefault();
    console.log("hello");
  }
}
/*Nithin Sathishkumar6:14 PM
https://youtu.be/2pZmKW9-I_k
Nithin Sathishkumar6:34 PM
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
}); */