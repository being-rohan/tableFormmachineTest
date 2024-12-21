import { Component, OnInit } from '@angular/core';
import { EmployerService } from './services/employer.service';
import { Itable } from './interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private _router: Router) { }
  title = 'tableFormmachineTest';
 
}
