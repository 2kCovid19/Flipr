import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    }
    );
  }
  name = 'countUp Demo';
  num: number = 0;
  newNum: number;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };
  interval: any;
  currentView: string;

  ngAfterViewInit() {
    this.changeView('view1');
  }

  changeView(view) {
    if (view !== this.currentView) {
      this.option = {
        startVal: this.num,
        useEasing: true,
        duration: 2,
        decimalPlaces: 2,
      };
      if (this.interval)
        clearInterval(this.interval);
      if (view === 'view1') {
        this.newNum = 1000;
        this.num = this.newNum;
        const that = this;
        this.interval = setInterval(function () {
          that.newNum += 10;
          that.option = {
            startVal: this.num,
            useEasing: false,
            duration: 40,
            decimalPlaces: 2,
          };
          that.num = that.newNum;
        }, 1000000000000)
      }
    }
  }
}
