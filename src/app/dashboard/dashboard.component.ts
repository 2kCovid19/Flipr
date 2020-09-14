import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchBystateNameForm : any;
  medicalCollegebeds: any;
  searchText:string;
  searchType:string;

  constructor(private service: DataService, private router:Router) {
  }

  
  ngOnInit() {
    this.service.getMedicalCollegeBeds().subscribe((data:any) => {console.log(this.medicalCollegebeds); this.medicalCollegebeds = data.data.medicalColleges;
    
    });
  }

}
