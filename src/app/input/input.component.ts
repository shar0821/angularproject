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
      x.addEventListener('keyup',(e)=>{this.display(e);});
  }
  display(e): void{
    e.preventDefault();
    if(e.keyCode===13){ //enter key 
      window.alert("input works!!!");
      this.value="";
    }

  }

  @Input() inputlabel = 'Input Label';
  @Input() inputplaceholder = 'Input Placeholder';
  @Input() value = '';
}
