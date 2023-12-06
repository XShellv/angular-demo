import { Component, Input, SimpleChanges } from "@angular/core";

declare var ByteLiveWebSDK: any; // 假设 ByteLiveWebSDK 是一个全局变量或者从其他地方引入的

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})

export class PlayerComponent {
  @Input() data: any;
  @Input() isActive: boolean;
  private webSDK: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isActive.currentValue) {
      this.initWebSDK();
    } else {
      this.destroyWebSDK();
    }
  }

  private initWebSDK() {
    this.webSDK = new ByteLiveWebSDK({
      activityId: this.data.ActivityId,
      token: this.data.SDKToken,
      service: "liveDemo",
      mode: 1,
      modules: [
        {
          id: "portrait-player",
          mode: "mobile-portrait",
        },
      ],
      options: {
        pcPlayerHeader: true,
      },
    });

    this.webSDK.on("error", console.log);

  }

  private destroyWebSDK() {
    this.webSDK && this.webSDK.destroy();
  }
}
