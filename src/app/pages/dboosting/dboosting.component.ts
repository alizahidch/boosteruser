import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dboosting',
  templateUrl: './dboosting.component.html',
  styleUrls: ['./dboosting.component.scss']
})
export class DboostingComponent implements OnInit {
  selectedRank = "Diamond";
  selectedDivision = 1;
  desiredRank = "Gold";
  desiredDivision = 1;
  totalCost=13;
  currentImage = {
    id: 1, name: "Division 1", url: '../assets/img/ranks/d1.png'
  };
  desiredImage = {
    id: 1, name: "Master", url: '../assets/img/ranks/g1.png'

  }
  Diamonds: any = [] = [
    {
      id: 1, name: "Division 1", url: '../assets/img/ranks/d1.png'

    },
    {
      id: 2, name: "Division 2", url: '../assets/img/ranks/d2.png'

    },
    {
      id: 3, name: "Division 3", url: '../assets/img/ranks/d3.png'

    },
    {
      id: 4, name: "Division 4", url: '../assets/img/ranks/d4.png'

    },


  ];

  Platinum: any = [] = [
    {
      id: 1, name: "Division 1", url: '../assets/img/ranks/p1.png'

    },
    {
      id: 2, name: "Division 2", url: '../assets/img/ranks/p2.png'

    },
    {
      id: 3, name: "Division 3", url: '../assets/img/ranks/p3.png'

    },
    {
      id: 4, name: "Division 4", url: '../assets/img/ranks/p4.png'

    },


  ];



  Gold: any = [] = [
    {
      id: 1, name: "Division 1", url: '../assets/img/ranks/g1.png'

    },
    {
      id: 2, name: "Division 2", url: '../assets/img/ranks/g2.png'

    },
    {
      id: 3, name: "Division 3", url: '../assets/img/ranks/g3.png'

    },
    {
      id: 4, name: "Division 4", url: '../assets/img/ranks/g4.png'

    },


  ];

  Silver: any = [] = [
    {
      id: 1, name: "Division 1", url: '../assets/img/ranks/s1.png'

    },
    {
      id: 2, name: "Division 2", url: '../assets/img/ranks/s2.png'

    },
    {
      id: 3, name: "Division 3", url: '../assets/img/ranks/s3.png'

    },
    {
      id: 4, name: "Division 4", url: '../assets/img/ranks/s4.png'

    },


  ];


  Bronze: any = [] = [
    {
      id: 1, name: "Division 1", url: '../assets/img/ranks/b1.png'

    },
    {
      id: 2, name: "Division 2", url: '../assets/img/ranks/b2.png'

    },
    {
      id: 3, name: "Division 3", url: '../assets/img/ranks/b3.png'

    },
    {
      id: 4, name: "Division 4", url: '../assets/img/ranks/b4.png'

    },


  ];

  Iron: any = [] = [
    {
      id: 1, name: "Division 1", url: '../assets/img/ranks/i1.png'

    },
    {
      id: 2, name: "Division 2", url: '../assets/img/ranks/i2.png'

    },
    {
      id: 3, name: "Division 3", url: '../assets/img/ranks/i3.png'

    },
    {
      id: 4, name: "Division 4", url: '../assets/img/ranks/i4.png'

    },


  ];


  Master: any = {
    id: 1, name: "Master", url: '../assets/img/ranks/master.png'
  }

  constructor() { }

  ngOnInit() {
  }



  calculatePrice(){
    let adjustedDivision = this.selectedDivision - 1;
    let adjustedDesiredDivision = this.desiredDivision - 1;
switch(this.selectedRank){
  case "Diamond":
        if (this.selectedDivision ==1 && this.desiredRank=="Master") {
          this.totalCost=227;
        }
        else if(this.selectedDivision ==2 && this.desiredRank=="Master" ){
          this.totalCost=352;

        }

        else if(this.selectedDivision==2 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
          this.totalCost=126;
        }
        else if(this.selectedDivision==3 && this.desiredRank=="Master"){
          this.totalCost=446;
        }
        else if(this.selectedDivision==3 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
          this.totalCost=221;
        }
        else if(this.selectedDivision==3 && this.desiredDivision==2 && this.desiredRank=="Diamond"){
          this.totalCost=95;
        }
        else if(this.selectedDivision==4 && this.desiredRank=="Master"){
          this.totalCost=531;
        }
        else if(this.selectedDivision==4 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
          this.totalCost=305;
        }
        else if(this.selectedDivision==4 && this.desiredDivision==2 && this.desiredRank=="Diamond"){
          this.totalCost=179;
        }
        else if(this.selectedDivision==4 && this.desiredDivision==3 && this.desiredRank=="Diamond"){
          this.totalCost=84;
        }
        else{
          this.totalCost=0;
        }
        break;

      case "Platinum":
        if (this.selectedDivision ==1 && this.desiredRank=="Master") {
          this.totalCost=227;
        }
        else if(this.selectedDivision ==2 && this.desiredRank=="Master" ){
          this.totalCost=352;

        }

        else if(this.selectedDivision==2 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
          this.totalCost=126;
        }
        else if(this.selectedDivision==3 && this.desiredRank=="Master"){
          this.totalCost=446;
        }
        else if(this.selectedDivision==3 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
          this.totalCost=221;
        }
        else if(this.selectedDivision==3 && this.desiredDivision==2 && this.desiredRank=="Diamond"){
          this.totalCost=95;
        }
        else if(this.selectedDivision==4 && this.desiredRank=="Master"){
          this.totalCost=531;
        }
        else if(this.selectedDivision==4 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
          this.totalCost=305;
        }
        else if(this.selectedDivision==4 && this.desiredDivision==2 && this.desiredRank=="Diamond"){
          this.totalCost=179;
        }
        else if(this.selectedDivision==4 && this.desiredDivision==3 && this.desiredRank=="Diamond"){
          this.totalCost=84;
        }
        else{
          this.totalCost=0;
        }

        break;

      case "Gold":
        if (this.selectedDivision ==1 && this.desiredDivision==4 && this.desiredRank=="Platinum") {
this.totalCost=31

        }

        else if(this.selectedDivision ==1 && this.desiredDivision==3 && this.desiredRank=="Platinum"){
          this.totalCost=67

        }
        else if(this.selectedDivision ==1 && this.desiredDivision==2 && this.desiredRank=="Platinum"){
this.totalCost=106
        }
        else if(this.selectedDivision ==1 && this.desiredDivision==1 && this.desiredRank=="Platinum"){
this.totalCost=145
        }


//selected gold level 2
if (this.selectedDivision ==2 && this.desiredDivision==4 && this.desiredRank=="Platinum") {
  this.totalCost=62
  
          }
  
          else if(this.selectedDivision ==2 && this.desiredDivision==3 && this.desiredRank=="Platinum"){
            this.totalCost=98
  
          }
          else if(this.selectedDivision ==2 && this.desiredDivision==2 && this.desiredRank=="Platinum"){
  this.totalCost=136
          }
          else if(this.selectedDivision ==2 && this.desiredDivision==1 && this.desiredRank=="Platinum"){
  this.totalCost=176
          }

   //selected gold level 3
   if (this.selectedDivision ==3 && this.desiredDivision==4 && this.desiredRank=="Platinum") {
    this.totalCost=88
    
            }
    
            else if(this.selectedDivision ==3 && this.desiredDivision==3 && this.desiredRank=="Platinum"){
              this.totalCost=123
    
            }
            else if(this.selectedDivision ==3 && this.desiredDivision==2 && this.desiredRank=="Platinum"){
    this.totalCost=162
            }
            else if(this.selectedDivision ==3 && this.desiredDivision==1 && this.desiredRank=="Platinum"){
    this.totalCost=201
            }       
//sekected gold level 4
if (this.selectedDivision ==4 && this.desiredDivision==4 && this.desiredRank=="Platinum") {
  this.totalCost=112
  
          }
  
          else if(this.selectedDivision ==4 && this.desiredDivision==3 && this.desiredRank=="Platinum"){
            this.totalCost=149
  
          }
          else if(this.selectedDivision ==4 && this.desiredDivision==2 && this.desiredRank=="Platinum"){
  this.totalCost=187
          }
          else if(this.selectedDivision ==4 && this.desiredDivision==1 && this.desiredRank=="Platinum"){
  this.totalCost=226
          }       


          //selected rank is diamond
          if (this.selectedDivision ==1 && this.desiredDivision==4 && this.desiredRank=="Diamond") {
            this.totalCost=190
            
                    }
            
                    else if(this.selectedDivision ==1 && this.desiredDivision==3 && this.desiredRank=="Diamond"){
                      this.totalCost=273
            
                    }
                    else if(this.selectedDivision ==1 && this.desiredDivision==2 && this.desiredRank=="Diamond"){
            this.totalCost=368
                    }
                    else if(this.selectedDivision ==1 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
            this.totalCost=494
                    }
            
                    
            
            //selected gold level 2
            if (this.selectedDivision ==2 && this.desiredDivision==4 && this.desiredRank=="Diamond") {
              this.totalCost=221
              
                      }
              
                      else if(this.selectedDivision ==2 && this.desiredDivision==3 && this.desiredRank=="Diamond"){
                        this.totalCost=305
              
                      }
                      else if(this.selectedDivision ==2 && this.desiredDivision==2 && this.desiredRank=="Diamond"){
              this.totalCost=399
                      }
                      else if(this.selectedDivision ==2 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
              this.totalCost=525
                      }
            
               //selected gold level 3
               if (this.selectedDivision ==3 && this.desiredDivision==4 && this.desiredRank=="Diamond") {
                this.totalCost=247
                
                        }
                
                        else if(this.selectedDivision ==3 && this.desiredDivision==3 && this.desiredRank=="Diamond "){
                          this.totalCost=330
                
                        }
                        else if(this.selectedDivision ==3 && this.desiredDivision==2 && this.desiredRank=="Diamond"){
                this.totalCost=425
                        }
                        else if(this.selectedDivision ==3 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
                this.totalCost=550
                        }       
            //sekected gold level 4
            if (this.selectedDivision ==4 && this.desiredDivision==4 && this.desiredRank=="Diamond") {
              this.totalCost=272
              
                      }
              
                      else if(this.selectedDivision ==4 && this.desiredDivision==3 && this.desiredRank=="Diamond"){
                        this.totalCost=356
              
                      }
                      else if(this.selectedDivision ==4 && this.desiredDivision==2 && this.desiredRank=="Diamond"){
              this.totalCost=449
                      }
                      else if(this.selectedDivision ==4 && this.desiredDivision==1 && this.desiredRank=="Diamond"){
              this.totalCost=576
                      }      


///desired gold and master left here



        break;

      case "Silver":
        if (this.selectedDivision != null) {
          console.log("In the silver")
          console.log(this.Silver[adjustedDivision])
          this.currentImage = this.Silver[adjustedDivision];
        }

        break;


      case "Bronze":
        if (this.selectedDivision != null) {
          console.log("In the bronze")
          console.log(this.Bronze[adjustedDivision])
          this.currentImage = this.Bronze[adjustedDivision];
        }

        break;

      case "Iron":
        if (this.selectedDivision != null) {
          console.log("In the iron")
          console.log(this.Iron[adjustedDivision])
          this.currentImage = this.Iron[adjustedDivision];
        }

        break;

}
     
  }

  selectDesiredRank() {
    let adjustedDivision = this.desiredDivision - 1;
    switch (this.desiredRank) {
      case "Master":
        if (this.desiredDivision != null) {
          console.log("In the diamonds")
          console.log(this.Master[adjustedDivision])
          this.desiredImage = this.Master;
        }
        break;

      case "Diamond":
        if (this.desiredDivision != null) {
          console.log("In the diamonds")
          console.log(this.Diamonds[adjustedDivision])
          this.desiredImage = this.Diamonds[adjustedDivision];
        }
        break;

      case "Platinum":
        if (this.desiredDivision != null) {
          console.log("In the platinum")
          console.log(this.Platinum[adjustedDivision])
          this.desiredImage = this.Platinum[adjustedDivision];
        }

        break;

      case "Gold":
        if (this.desiredDivision != null) {
          console.log("In the gold")
          console.log(this.Gold[adjustedDivision])
          this.desiredImage = this.Gold[adjustedDivision];
        }

        break;

      case "Silver":
        if (this.desiredDivision != null) {
          console.log("In the silver")
          console.log(this.Silver[adjustedDivision])
          this.desiredImage = this.Silver[adjustedDivision];
        }

        break;


      case "Bronze":
        if (this.desiredDivision != null) {
          console.log("In the bronze")
          console.log(this.Bronze[adjustedDivision])
          this.desiredImage = this.Bronze[adjustedDivision];
        }

        break;

      case "Iron":
        if (this.desiredDivision != null) {
          console.log("In the iron")
          console.log(this.Iron[adjustedDivision])
          this.desiredImage = this.Iron[adjustedDivision];
        }

        break;

    }

  }





  selectRank() {

    let adjustedDivision = this.selectedDivision - 1;
    console.log(adjustedDivision)
    switch (this.selectedRank) {
      case "Diamond":
        if (this.selectedDivision != null) {
          console.log("In the diamonds")
          console.log(this.Diamonds[adjustedDivision])
          this.currentImage = this.Diamonds[adjustedDivision];
        }
        break;

      case "Platinum":
        if (this.selectedDivision != null) {
          console.log("In the platinum")
          console.log(this.Platinum[adjustedDivision])
          this.currentImage = this.Platinum[adjustedDivision];
        }

        break;

      case "Gold":
        if (this.selectedDivision != null) {
          console.log("In the gold")
          console.log(this.Gold[adjustedDivision])
          this.currentImage = this.Gold[adjustedDivision];
        }

        break;

      case "Silver":
        if (this.selectedDivision != null) {
          console.log("In the silver")
          console.log(this.Silver[adjustedDivision])
          this.currentImage = this.Silver[adjustedDivision];
        }

        break;


      case "Bronze":
        if (this.selectedDivision != null) {
          console.log("In the bronze")
          console.log(this.Bronze[adjustedDivision])
          this.currentImage = this.Bronze[adjustedDivision];
        }

        break;

      case "Iron":
        if (this.selectedDivision != null) {
          console.log("In the iron")
          console.log(this.Iron[adjustedDivision])
          this.currentImage = this.Iron[adjustedDivision];
        }

        break;

    }


  }
  checkFunction() {
    console.log(this.selectedDivision)
  }


}
