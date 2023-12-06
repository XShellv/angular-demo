import { Component } from "@angular/core";

@Component({
  selector: "app-live",
  templateUrl: "./live.component.html",
})
export class LiveComponent {
  ngAfterViewInit() {
    var webSDK = new window.ByteLiveWebSDK({
      activityId: 1733120692310066,
      token: "ZQEjIp",
      service: "liveDemo",
      mode: 1,
      modules: [
        {
          id: "player",
          mode: "player",
        },
        {
          id: "menu",
          mode: "menu",
          menu: ["comment", "imagetext", "cardlist"],
        },
        {
          id: "menu2",
          mode: "menu",
          menu: ["bandcontent"],
        },
      ],
      options: {
        pcPlayerHeader: true,
      },
    });
    webSDK.on("error", console.log);
  }
}
