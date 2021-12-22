import { Component, OnInit, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

@BuilderBlock({
  tag: 'new-button',
  name: 'new button',
  inputs: [
    {
      name: 'buttonname',
      type: 'string',
    },
    {
      name: 'buttonlink',
      type: 'url',
    },
  ],
})

@Component({
  selector: 'app-button-new',
  templateUrl: './button-new.component.html',
  styleUrls: ['./button-new.component.css'],
})

export class ButtonNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() buttonname = 'Button Name';
  @Input() buttonlink = '#';

}
