import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LiveComponent } from "./live/live.component";
import { SwiperComponent } from "./swiper/swiper.component";
import { PlayerComponent } from "./swiper/player/player.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, LiveComponent, SwiperComponent, PlayerComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
