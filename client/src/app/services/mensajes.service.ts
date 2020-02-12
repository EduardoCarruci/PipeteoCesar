import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mensaje } from "../interfaces/Mensajes";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MensajesService {
  BASE_URL: String = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getMensaje(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.BASE_URL}/mensajes`);
  }
  getMensaje_unique(id): Observable<Mensaje> {
    return this.http.get<Mensaje>(`${this.BASE_URL}/mensajes/${id}`);
  }

  createMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.BASE_URL}/mensajes/create`, mensaje);
  }

  deleteMensaje(id: string): Observable<Mensaje> {
    return this.http.delete<Mensaje>(`${this.BASE_URL}/mensajes/${id}`);
  }
  updateMensaje(id: string, mensaje: Mensaje): Observable<Mensaje> {
    return this.http.put<Mensaje>(
      `${this.BASE_URL}/mensajes/edit/${id}`,
      mensaje
    );
  }
}
