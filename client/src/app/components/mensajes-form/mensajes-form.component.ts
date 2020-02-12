import { Component, OnInit } from "@angular/core";
import { Mensaje } from "../../interfaces/Mensajes";
import { MensajesService } from "../../services/mensajes.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-mensajes-form",
  templateUrl: "./mensajes-form.component.html",
  styleUrls: ["./mensajes-form.component.css"]
})
export class MensajesFormComponent implements OnInit {
  mensaje: Mensaje = {
    nick: "",
    mensaje: ""
  };
  edit: boolean = false;
  constructor(
    private mensajeService: MensajesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.mensajeService.getMensaje_unique(params.id).subscribe(res => {
        console.log(res);
        this.mensaje = res;
        this.edit = true;
      });
    }
  }

  submitMensaje() {
    this.mensajeService.createMensaje(this.mensaje).subscribe(
      res => {
        console.log(res), this.router.navigate(["/"]);
      },
      err => console.log(err)
    );
  }
  updateMensaje() {
    this.mensajeService.updateMensaje(this.mensaje._id, this.mensaje).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/mensajes"]);
      },
      err => console.log(err)
    );
  }
}
