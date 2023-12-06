// swiper.component.ts

import { Component, ViewChild, ElementRef } from "@angular/core";
// import axios from "axios";
import data from "./data.json";
import Swiper from 'swiper';

@Component({
  selector: "app-swiper",
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.css"],
})
export class SwiperComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  list: any[] = data.Result.List;
  loading = true;
  activeIndex = 0;

  ngAfterViewInit() {
    this.fetchActivityData();
  }

  private setupSwiper() {
    const that = this;
    if (this.list.length > 0) {
      new Swiper(this.swiperContainer.nativeElement, {
        direction: 'vertical',
        on: {
          init: (swiper: any) => {
            console.log("init");
          },
          slideChange: function (swiper) {
            that.activeIndex = this.activeIndex
          },
        },
      });
    }
  }

  private fetchActivityData() {
    this.setupSwiper();

    // this.loading = true;
    // axios({
    //   method: "GET",
    //   url: "https://live.byteplus.com/app-server-demo/v1/activity/detail/list",
    //   headers: {
    //     Authorization: "Basic dDE6cHdkMQ==",
    //   },
    //   params: {
    //     PageNumber: 1,
    //     PageSize: 100,
    //   },
    // })
    //   .then((res) => {
    //     this.loading = false;
    //     this.list = res.data?.Result?.List;
    //     this.setupSwiper();
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     this.loading = false;
    //   });
  }
}
