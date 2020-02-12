import { Component, OnInit } from "@angular/core";
import { MensajesService } from "../../services/mensajes.service";
import { Mensaje } from "../../interfaces/Mensajes";
@Component({
  selector: "app-mensajes-list",
  templateUrl: "./mensajes-list.component.html",
  styleUrls: ["./mensajes-list.component.css"]
})
export class MensajesListComponent implements OnInit {
  mensajes: Mensaje[] = [];
  constructor(private mensajeService: MensajesService) {}

  ngOnInit() {
    this.getMensaje();
  }
  getMensaje() {
    this.mensajeService.getMensaje().subscribe(
      res => {
        this.mensajes = res;
      },
      err => console.log(err)
    );
  }
  deleteMensaje(id: string) {
    this.mensajeService.deleteMensaje(id).subscribe(
      res => {
        this.getMensaje();
      },
      err => console.log(err)
    );
  }
}
