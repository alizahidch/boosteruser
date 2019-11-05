import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

visitDboosting(){
  this.router.navigateByUrl('/dboosting');

}

visitCoaching(){
  this.router.navigateByUrl('/coaching');

}

visitDqueue(){
  this.router.navigateByUrl('/dqueue');

}

}
