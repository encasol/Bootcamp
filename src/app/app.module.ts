import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { WorkoutPageComponent } from "./workout-page/workout-page.component";
import { WorkoutEditPageComponent } from "./workout-edit-page/workout-edit-page.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WorkoutPageComponent,
    WorkoutEditPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
