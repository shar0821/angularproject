import { Component, OnInit, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

@BuilderBlock({
  tag: 'new-select',
  name: 'new select',
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
  ],
})

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  selected='';
  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() selectlabel = 'Select Label';
  @Input() selectoption1 = 'Option 1';
  @Input() selectoption2 = 'Option 2';
  @Input() selectoption3 = 'Option 3';

}
