import { Categoria } from "./categoria/categoria.model";
import { CINEMA_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class CategoriasService {
    categorias: Categoria[] = [];

    constructor(private http: HttpClient){}

    listarCategorias(): Observable<Categoria[]>{
        return this.http.get<Categoria[]>(`${CINEMA_API}/appREST/webapi/myresource/categorias`)
                        .pipe(catchError(ErrorHandler.handleError));
    }

    incluirCategoria(categoria: Categoria): Observable<Categoria>{
        return this.http.post<Categoria>(`${CINEMA_API}/appREST/webapi/myresource/incluir`, categoria)
                        .pipe(catchError(ErrorHandler.handleError));
    }
}