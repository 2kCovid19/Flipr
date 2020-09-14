import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
        duration: 10,
      };
      let demo = new CountUp('myTargetElement', 6411, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
  }

}
