import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';


// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('someInput') someInput:ElementRef;


  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  selectedChampions:any=[]=[];
  chatOffline=false;
  notes="Please use Flash on D"
  roles:any=[]=[
    {
      id: "top", name:"top",value:"Top",checked:true
    },
    {
      id: "jungle", name:"ungle",value:"Jungle",checked:false
    },
    {
      id: "mid", name:"mid",value:"Mid",checked:true
    },
    {
      id: "support", name:"support",value:"Support",checked:false
    },
    {
      id: "bot", name:"bot",value:"Bot",checked:false
    },
  ];

  selectedRoles:any=[]

  booster:any=[
    {name:"booster1",value:"booster1"},
    {name:"booster2",value:"booster2"},
    {name:"booster3",value:"booster3"}
  ]

  selectedBooster;

  champions: any[] = [{
    id: 1, name: "AatroxSquare.png", url: '../assets/img/champions/AatroxSquare.png'
    },
    {
    id: 2, name: "AhriSquare.png", url: '../assets/img/champions/AhriSquare.png'
  },
  {
    id: 3, name: "AkaliSquare.png", url: '../assets/img/champions/AkaliSquare.png'
  },
  {
    id: 4, name: "AlistarSquare.png", url: '../assets/img/champions/AlistarSquare.png'
  },
  {
    id: 5, name: "AmumuSquare.png", url: '../assets/img/champions/AmumuSquare.png'
  },
  {
    id: 6, name: "AniviaSquare.png", url: '../assets/img/champions/AniviaSquare.png'
  },
  {
    id: 7, name: "AnnieSquare.png", url: '../assets/img/champions/AnnieSquare.png'
  },
  {
    id: 8, name: "AsheSquare.png", url: '../assets/img/champions/AsheSquare.png'
  },
  {
    id: 9, name: "Aurelion_SolSquare.png", url: '../assets/img/champions/Aurelion_SolSquare.png'
  },
  {
    id: 10, name: "AzirSquare.png", url: '../assets/img/champions/AzirSquare.png'
  },
  {
    id: 11, name: "BardSquare.png", url: '../assets/img/champions/BardSquare.png'
  },
  {
    id: 12, name: "BlitzcrankSquare.png", url: '../assets/img/champions/BlitzcrankSquare.png'
  },
  {
    id: 13, name: "BrandSquare.png", url: '../assets/img/champions/BrandSquare.png'
  },
  {
    id: 14, name: "BraumSquare.png", url: '../assets/img/champions/BraumSquare.png'
  },
  {
    id: 15, name: "CaitlynSquare.png", url: '../assets/img/champions/CaitlynSquare.png'
  },
  {
    id: 16, name: "CamilleSquare.png", url: '../assets/img/champions/CamilleSquare.png'
  },
  {
    id: 17, name: "CassiopeiaSquare.png", url: '../assets/img/champions/CassiopeiaSquare.png'
  },
  {
    id: 18, name: "ChoGathSquare.png", url: '../assets/img/champions/ChoGathSquare.png'
  },
  {
    id: 19, name: "CorkiSquare.png", url: '../assets/img/champions/CorkiSquare.png'
  },
  {
    id: 20, name: "DariusSquare.png", url: '../assets/img/champions/DariusSquare.png'
  },
  {
    id: 21, name: "DianaSquare.png", url: '../assets/img/champions/DianaSquare.png'
  },
  {
    id: 22, name: "DravenSquare.png", url: '../assets/img/champions/DravenSquare.png'
  },
  {
    id: 23, name: "DrMundoSquare.png", url: '../assets/img/champions/DrMundoSquare.png'
  },
  {
    id: 24, name: "EkkoSquare.png", url: '../assets/img/champions/EkkoSquare.png'
  },
  {
    id: 25, name: "EliseSquare.png", url: '../assets/img/champions/EliseSquare.png'
  },
  {
    id: 26, name: "EvelynnSquare.png", url: '../assets/img/champions/EvelynnSquare.png'
  },
  {
    id: 27, name: "EzrealSquare.png", url: '../assets/img/champions/EzrealSquare.png'
  },
  {
    id: 28, name: "FiddlesticksSquare.png", url: '../assets/img/champions/FiddlesticksSquare.png'
  },
  {
    id: 29, name: "FioraSquare.png", url: '../assets/img/champions/FioraSquare.png'
  },
  {
    id: 30, name: "FizzSquare.png", url: '../assets/img/champions/FizzSquare.png'
  },
  {
    id: 31, name: "GalioSquare.png", url: '../assets/img/champions/GalioSquare.png'
  },
  {
    id: 32, name: "GangplankSquare.png", url: '../assets/img/champions/GangplankSquare.png'
  },
  {
    id: 33, name: "GarenSquare.png", url: '../assets/img/champions/GarenSquare.png'
  },
  {
    id: 34, name: "GnarSquare.png", url: '../assets/img/champions/GnarSquare.png'
  },
  {
    id: 35, name: "GragasSquare.png", url: '../assets/img/champions/GragasSquare.png'
  },
  {
    id: 36, name: "GravesSquare.png", url: '../assets/img/champions/GravesSquare.png'
  },
  {
    id: 37, name: "HecarimSquare.png", url: '../assets/img/champions/HecarimSquare.png'
  },
  {
    id: 38, name: "HeimerdingerSquare.png", url: '../assets/img/champions/HeimerdingerSquare.png'
  },
  {
    id: 39, name: "IllaoiSquare.png", url: '../assets/img/champions/IllaoiSquare.png'
  },
  {
    id: 40, name: "IreliaSquare.png", url: '../assets/img/champions/IreliaSquare.png'
  },
  
  {
    id: 41, name: "IvernSquare.png", url: '../assets/img/champions/IvernSquare.png'
  },
  {
    id: 42, name: "JannaSquare.png", url: '../assets/img/champions/JannaSquare.png'
  },
  {
    id: 43, name: "JarvanIVSquare.png", url: '../assets/img/champions/JarvanIVSquare.png'
  },
  {
    id: 44, name: "JaxSquare.png", url: '../assets/img/champions/JaxSquare.png'
  },
  {
    id: 45, name: "JayceSquare.png", url: '../assets/img/champions/JayceSquare.png'
  },
  {
    id: 46, name: "JhinSquare.png", url: '../assets/img/champions/JhinSquare.png'
  },
  {
    id: 47, name: "JinxSquare.png", url: '../assets/img/champions/JinxSquare.png'
  },
  {
    id: 48, name: "Kai'SaSquare.png", url: '../assets/img/champions/KaiSaSquare.png '
  },
  {
    id: 49, name: "KalistaSquare.png", url: '../assets/img/champions/KalistaSquare.png'
  },
  {
    id: 50, name: "KarmaSquare.png", url: '../assets/img/champions/KarmaSquare.png'
  },
  {
    id: 51, name: "KarthusSquare.png", url: '../assets/img/champions/KarthusSquare.png'
  },
  {
    id: 52, name: "KassadinSquare.png", url: '../assets/img/champions/KassadinSquare.png'
  },
  {
    id: 53, name: "KatarinaSquare.png", url: '../assets/img/champions/KatarinaSquare.png'
  },
  {
    id: 54, name: "KayleSquare.png", url: '../assets/img/champions/KayleSquare.png'
  },
  {
    id: 55, name: "KaynSquare.png", url: '../assets/img/champions/KaynSquare.png'
  },
  {
    id: 56, name: "KennenSquare.png", url: '../assets/img/champions/KennenSquare.png'
  },
  {
    id: 57, name: "Kha'ZixSquare.png", url: '../assets/img/champions/KhaZixSquare.png'
  },
  {
    id: 58, name: "KindredSquare.png", url: '../assets/img/champions/KindredSquare.png'
  },
  {
    id: 59, name: "KledSquare.png", url: '../assets/img/champions/KledSquare.png'
  },
  {
    id: 60, name: "Kog'MawSquare.png", url: '../assets/img/champions/KogMawSquare.png'
  },
  {
    id: 61, name: "LeBlancSquare.png", url: '../assets/img/champions/LeBlancSquare.png'
  },
  {
    id: 62, name: "Lee_SinSquare.png", url: '../assets/img/champions/Lee_SinSquare.png'
  },
  {
    id: 63, name: "LeonaSquare.png", url: '../assets/img/champions/LeonaSquare.png'
  },
  {
    id: 64, name: "LissandraSquare.png", url: '../assets/img/champions/LissandraSquare.png'
  },
  {
    id: 65, name: "LucianSquare.png", url: '../assets/img/champions/LucianSquare.png'
  },
  {
    id: 66, name: "LuluSquare.png", url: '../assets/img/champions/LuluSquare.png'
  },
  {
    id: 67, name: "LuxSquare.png", url: '../assets/img/champions/LuxSquare.png'
  },
  {
    id: 68, name: "MalphiteSquare.png", url: '../assets/img/champions/MalphiteSquare.png'
  },
  {
    id: 69, name: "MalzaharSquare.png", url: '../assets/img/champions/MalzaharSquare.png'
  },
  {
    id: 70, name: "MaokaiSquare.png", url: '../assets/img/champions/MaokaiSquare.png'
  },
  {
    id: 71, name: "Master_YiSquare.png", url: '../assets/img/champions/Master_YiSquare.png'
  },
  {
    id: 72, name: "MissFortuneSquare.png", url: '../assets/img/champions/MissFortuneSquare.png'
  },
  {
    id: 73, name: "MordekaiserSquare.png", url: '../assets/img/champions/MordekaiserSquare.png'
  },
  {
    id: 74, name: "MorganaSquare.png", url: '../assets/img/champions/MorganaSquare.png'
  },
  {
    id: 75, name: "NamiSquare.png", url: '../assets/img/champions/NamiSquare.png'
  },
  {
    id: 76, name: "NasusSquare.png", url: '../assets/img/champions/NasusSquare.png'
  },
  {
    id: 77, name: "NautilusSquare.png", url: '../assets/img/champions/NautilusSquare.png'
  },
  {
    id: 78, name: "NeekoSquare.png", url: '../assets/img/champions/NeekoSquare.png'
  }, {
    id: 79, name: "NidaleeSquare.png", url: '../assets/img/champions/NidaleeSquare.png'
  }, {
    id: 80, name: "NocturneSquare.png", url: '../assets/img/champions/NocturneSquare.png'
  },
  {
    id: 81, name: "Nunu_&_WillumpSquare.png", url: '../assets/img/champions/Nunu_&_WillumpSquare.png'
  },
  {
    id: 82, name: "OlafSquare.png", url: '../assets/img/champions/OlafSquare.png'
  },{
    id: 83, name: "OriannaSquare.png", url: '../assets/img/champions/OriannaSquare.png'
  },{
    id: 84, name: "OrnnSquare.png", url: '../assets/img/champions/OrnnSquare.png'
  },{
    id: 85, name: "PantheonSquare.png", url: '../assets/img/champions/PantheonSquare.png'
  },{
    id: 86, name: "PoppySquare.png", url: '../assets/img/champions/PoppySquare.png'
  },{
    id: 87, name: "PykeSquare.png", url: '../assets/img/champions/PykeSquare.png'
  },{
    id: 88, name: "QiyanaSquare.png", url: '../assets/img/champions/QiyanaSquare.png'
  },{
    id: 89, name: "QuinnSquare.png", url: '../assets/img/champions/QuinnSquare.png'
  },{
    id: 90, name: "RakanSquare.png", url: '../assets/img/champions/RakanSquare.png'
  },{
    id: 91, name: "RammusSquare.png", url: '../assets/img/champions/RammusSquare.png'
  },{
    id: 92, name: "Rek'SaiSquare.png", url: '../assets/img/champions/RekSaiSquare.png'
  },{
    id: 93, name: "RenektonSquare.png", url: '../assets/img/champions/RenektonSquare.png'
  },{
    id: 94, name: "RengarSquare.png", url: '../assets/img/champions/RengarSquare.png'
  },{
    id: 95, name: "RivenSquare.png", url: '../assets/img/champions/RivenSquare.png'
  },{
    id: 96, name: "RumbleSquare.png", url: '../assets/img/champions/RumbleSquare.png'
  },{
    id: 97, name: "RyzeSquare.png", url: '../assets/img/champions/RyzeSquare.png'
  },{
    id: 98, name: "SejuaniSquare.png", url: '../assets/img/champions/SejuaniSquare.png'
  },{
    id: 99, name: "SennaSquare.png", url: '../assets/img/champions/SennaSquare.png'
  },{
    id: 100, name: "ShacoSquare.png", url: '../assets/img/champions/ShacoSquare.png'
  },{
    id: 101, name: "ShenSquare.png", url: '../assets/img/champions/ShenSquare.png'
  },{
    id: 102, name: "ShyvanaSquare.png", url: '../assets/img/champions/ShyvanaSquare.png'
  },{
    id: 103, name: "SingedSquare.png", url: '../assets/img/champions/SingedSquare.png'
  },{
    id: 104, name: "SionSquare.png", url: '../assets/img/champions/SionSquare.png'
  },{
    id: 105, name: "SivirSquare.png", url: '../assets/img/champions/SivirSquare.png'
  },{
    id: 106, name: "SkarnerSquare.png", url: '../assets/img/champions/SkarnerSquare.png'
  },{
    id: 107, name: "SonaSquare.png", url: '../assets/img/champions/SonaSquare.png'
  },{
    id: 108, name: "SorakaSquare.png", url: '../assets/img/champions/SorakaSquare.png'
  },{
    id: 109, name: "SwainSquare", url: '../assets/img/champions/SwainSquare.png'
  },{
    id: 110, name: "SylasSquare.png", url: '../assets/img/champions/SylasSquare.png'
  },{
    id: 111, name: "SyndraSquare.png", url: '../assets/img/champions/SyndraSquare.png'
  },{
    id: 112, name: "Tahm_KenchSquare.png", url: '../assets/img/champions/Tahm_KenchSquare.png'
  },{
    id: 113, name: "TaliyahSquare.png", url: '../assets/img/champions/TaliyahSquare.png'
  },{
    id: 114, name: "TalonSquare.png", url: '../assets/img/champions/TalonSquare.png'
  },{
    id: 115, name: "TaricSquare.png", url: '../assets/img/champions/TaricSquare.png'
  },{
    id: 116, name: "TeemoSquare.png", url: '../assets/img/champions/TeemoSquare.png'
  },{
    id: 117, name: "ThreshSquare.png", url: '../assets/img/champions/ThreshSquare.png'
  },{
    id: 119, name: "TristanaSquare.png", url: '../assets/img/champions/TristanaSquare.png'
  },
  {
    id: 120, name: "TrundleSquare.png", url: '../assets/img/champions/TrundleSquare.png'
  },
  {
    id: 121, name: "TryndamereSquare.png", url: '../assets/img/champions/TryndamereSquare.png'
  },
  {
    id: 122, name: "Twisted_FateSquare.png", url: '../assets/img/champions/Twisted_FateSquare.png'
  },
  {
    id: 123, name: "TwitchSquare.png", url: '../assets/img/champions/TwitchSquare.png'
  },
  {
    id: 124, name: "UdyrSquare.png", url: '../assets/img/champions/UdyrSquare.png'
  },
  {
    id: 125, name: "UrgotSquare.png", url: '../assets/img/champions/UrgotSquare.png'
  },
  {
    id: 126, name: "VarusSquare.png", url: '../assets/img/champions/VarusSquare.png'
  },
  {
    id: 127, name: "VayneSquare.png", url: '../assets/img/champions/VayneSquare.png'
  },
  {
    id: 128, name: "VeigarSquare.png", url: '../assets/img/champions/VeigarSquare.png'
  },
  {
    id: 129, name: "Vel'KozSquare.png", url: '../assets/img/champions/VelKozSquare.png'
  },
  {
    id: 130, name: "ViktorSquare.png", url: '../assets/img/champions/ViktorSquare.png'
  },
  {
    id: 131, name: "VladimirSquare.png", url: '../assets/img/champions/VladimirSquare.png'
  },  {
    id: 132, name: "VolibearSquare.png", url: '../assets/img/champions/VolibearSquare.png'
  },  {
    id: 133, name: "WarwickSquare.png", url: '../assets/img/champions/WarwickSquare.png'
  },  {
    id: 134, name: "WukongSquare.png", url: '../assets/img/champions/WukongSquare.png'
  },  {
    id: 135, name: "XayahSquare.png", url: '../assets/img/champions/XayahSquare.png'
  },  {
    id: 136, name: "XerathSquare.png", url: '../assets/img/champions/XerathSquare.png'
  },  {
    id: 137, name: "Xin_ZhaoSquare.png", url: '../assets/img/champions/Xin_ZhaoSquare.png'
  },
  {
    id: 138, name: "YasuoSquare.png", url: '../assets/img/champions/YasuoSquare.png'
  },{
    id: 139, name: "YorickSquare.png", url: '../assets/img/champions/YorickSquare.png'
  },{
    id: 140, name: "YuumiSquare.png", url: '../assets/img/champions/YuumiSquare.png'
  },{
    id: 141, name: "ZacSquare.png", url: '../assets/img/champions/ZacSquare.png'
  },{
    id: 142, name: "Zed.png", url: '../assets/img/champions/Zed.png'
  },{
    id: 143, name: "Ziggs.png", url: '../assets/img/champions/Ziggs.png'
  },{
    id: 144, name: "Zilean.png", url: '../assets/img/champions/Zilean.png'
  },{
    id: 145, name: "Zoe.png", url: '../assets/img/champions/Zoe.png'
  },{
    id: 146, name: "Zyra.png", url: '../assets/img/champions/Zyra.png'
  },
  {
    id: 153, name: "ViSquare.png", url: '../assets/img/champions/ViSquare.png'
  },
]

  constructor() { }

  ngOnInit() {

    // this.datasets = [
    //   [0, 20, 10, 30, 15, 40, 20, 60, 60],
    //   [0, 20, 5, 25, 10, 30, 15, 40, 40]
    // ];
    // this.data = this.datasets[0];


    // var chartOrders = document.getElementById('chart-orders');

    // parseOptions(Chart, chartOptions());


    // var ordersChart = new Chart(chartOrders, {
    //   type: 'bar',
    //   options: chartExample2.options,
    //   data: chartExample2.data
    // });

    // var chartSales = document.getElementById('chart-sales');

    // this.salesChart = new Chart(chartSales, {
		// 	type: 'line',
		// 	options: chartExample1.options,
		// 	data: chartExample1.data
		// });
  }

  ngAfterViewInit() {
    console.log( this.someInput.nativeElement.value)
   
  }

  selectAvatar(x){
    this.selectedChampions.push(this.champions[x])
this.champions.splice(x,1)
  }
  unselectAvatar(x){
    this.champions.push(this.selectedChampions[x])
    this.selectedChampions.splice(x,1)

  }

  fetchRole(){
    this.selectedRoles=[]
this.roles.forEach(element => {
  if(element.checked==true)
  {
    this.selectedRoles.push(element)
  }
  else{
    console.log("element is false")
  }
  
});

  }


  fetchChatMode(){
    if(this.chatOffline){
// here we will upload succes for chat offline checkbox
    }
    else{
//vice versa
    }

  }

  getBoosters(){
    console.log(this.selectedBooster)
  }

  fetchNote(){
    console.log(this.notes)
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
