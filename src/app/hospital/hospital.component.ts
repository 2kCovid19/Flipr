import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  hospitalbeds: any;
  medicalCollegebeds: any;
  constructor(private service: DataService, private router:Router) {
  }

  ngOnInit() {
    this.service.getHospitalsBeds().subscribe((data: any) => {console.log(data); this.hospitalbeds = data.data.regional; });
    
  }

}
