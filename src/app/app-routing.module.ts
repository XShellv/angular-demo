import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LiveComponent } from "./live/live.component";
import { SwiperComponent } from "./swiper/swiper.component";

const routes: Routes = [
  { path: "", redirectTo: "live", pathMatch: "full" },
  { path: "live", component: LiveComponent },
  { path: "swiper", component: SwiperComponent },
  { path: "vod", component: LiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
