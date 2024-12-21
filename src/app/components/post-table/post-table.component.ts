import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements OnInit {

  @Input() postObj!:any
  constructor() { }

  ngOnInit(): void {
  }

}
