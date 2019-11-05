import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  config: any;
  collection = { count: 8, data: [

  ] };
user:any=[{

  url:"/assets/img/brand/av1.png",
  name:"Mike",
  date:"04/10/2019",
  role:"Admin",
  status:"Active",
},
{
  url:"/assets/img/brand/av2.png",
  name:"Paula",
  date:"08/10/2019",
  role:"Booster",
  status:"Active",
},
{url:"/assets/img/brand/av1.png",
name:"David",
date:"04/10/2019",
role:"Admin",
status:"Active",},
{url:"/assets/img/brand/av2.png",
name:"Alice",
date:"04/10/2019",
role:"User",
status:"Suspended",},
{url:"/assets/img/brand/av1.png",
name:"Alan",
date:"04/10/2013",
role:"Booster",
status:"Active",},
{url:"/assets/img/brand/av1.png",
name:"Ali",
date:"04/10/2013",
role:"Admin",
status:"Active",},
{url:"/assets/img/brand/av1.png",
name:"Ali",
date:"04/10/2013",
role:"Admin",
status:"Active",},{url:"/assets/img/brand/av1.png",
name:"Ali",
date:"04/10/2013",
role:"Admin",
status:"Inactive",},


]
 

  constructor(private router:Router) {
    for (var i = 0; i < this.collection.count; i++) {
     let key=i+1;
      this.collection.data.push(
      {...this.user[i],id:key}
        // {
        //   id: i + 1,
        //   url:"/assets/img/brand/av1.png",
        //   name:"Ali",
        //   date:"04/10/2013",
        //   role:"Admin",
        //   status:"Active",
        //   value: "items number " + (i + 1)
        // }
      );

      console.log(this.collection.data)
    }

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  
   }
   
   pageChanged(event){
    this.config.currentPage = event;
  }


  viewProfile(){
    this.router.navigateByUrl('/userpage');

  }

  ngOnInit() {
  }


  
}
