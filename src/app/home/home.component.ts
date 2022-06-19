import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
number=1
verif =false
date="09/18/2022"
dataArray=["mehrez","mohamed","ali","Naceur"]

profile={
  firstName:"MEHREZ",
  LastName:"yaakobi",
  Adresse:"tunis",
  website:"www.okitou.com",
  Age:"29"
}




  constructor() { }

  ngOnInit(): void {
  }

}
