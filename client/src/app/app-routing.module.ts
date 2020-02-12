import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MensajesListComponent } from "./components/mensajes-list/mensajes-list.component";
import { MensajesFormComponent } from "./components/mensajes-form/mensajes-form.component";
const routes: Routes = [
  {
    path: "",
    component: MensajesListComponent
  },
  {
    path: "mensajes",
    component: MensajesListComponent
  },
  {
    path: "mensajes/create",
    component: MensajesFormComponent
  },
  {
    path: "mensajes/edit/:id",
    component: MensajesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
