import { Component, OnInit } from '@angular/core';
import { Itable } from 'src/app/interface/interface';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postarr!: any
  constructor(private _service: EmployerService) { }

  ngOnInit(): void {
    this._service.fetchproducts()
      .subscribe((res => {
        console.log(res)
        this.postarr=res
        console.log(this.postarr);

      }))
  }

}
