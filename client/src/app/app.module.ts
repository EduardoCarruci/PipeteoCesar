import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MensajesListComponent } from "./components/mensajes-list/mensajes-list.component";
import { MensajesFormComponent } from "./components/mensajes-form/mensajes-form.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MensajesListComponent,
    MensajesFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
