import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  Notifications : any;
  str:string;
   date:string[10];
  text:string[];
  i:number;
  num:number=0;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getNotificationList().subscribe((data: any) => {console.log(data); this.Notifications = data.data.notifications;
       });
  }


}
