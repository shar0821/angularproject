import { Component, OnInit, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

@BuilderBlock({
  tag: 'new-input',
  name: 'new input',
  inputs: [
    {
      name: 'inputlabel',
      type: 'string',
    },
    {
      name: 'inputplaceholder',
      type: 'string',
    },
  ],
})

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const x=document.querySelector('#I') as HTMLInputElement;
      //x.addEventListener('keypress',()=>{this.display();});
      x.addEventListener('keyup',(e)=>{this.display(e);});
  }
  getInput() {
      //document.addEventListener(input);
      
  }
  display(e): void{
    e.preventDefault();
     if(e.keyCode===13){//enter key thala
       //console.log(this.value);//only when enter key is pressed
       window.alert("input works!!!");
       this.value="";
      }

  }
  /*display(): void
  {
    console.log(this.value);
  }*/
  @Input() inputlabel = 'Input Label';
  @Input() inputplaceholder = 'Input Placeholder';
  @Input() value = '';
}
