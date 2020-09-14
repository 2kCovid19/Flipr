import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css']
})
export class HelplineComponent implements OnInit {
  helplines : any;
  index: any;
  constructor(private service: DataService) { 
    this.index = [0,1,2,3,4,5,6,7,8,,9,10];
  }

  ngOnInit(): void {
    this.service.getHelpLineList().subscribe((res: any) => { this.helplines = res.data.contacts.regional;  console.log(res);console.log(this.helplines); });
 

  }

}
