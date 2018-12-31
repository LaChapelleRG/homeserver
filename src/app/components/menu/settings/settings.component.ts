import { Component, OnInit } from '@angular/core';
import exec = require('child_process').exec;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  shutdown() {
    
    console.log('Pi Shutdown');
  }


}
