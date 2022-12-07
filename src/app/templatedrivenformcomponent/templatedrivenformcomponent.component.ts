import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenformcomponent',
  templateUrl: './templatedrivenformcomponent.component.html',
  styleUrls: ['./templatedrivenformcomponent.component.css']
})
export class TemplatedrivenformcomponentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  save(f:NgForm){
    console.log(f);
  }
 
}
