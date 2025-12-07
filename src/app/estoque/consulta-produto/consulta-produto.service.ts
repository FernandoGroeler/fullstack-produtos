import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaProduto } from './consulta-produto';
import { ApiResponse } from '../../common/api-response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ConsultaProdutoService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<ApiResponse<ConsultaProduto[]>> {
    return this.http.get<ApiResponse<ConsultaProduto[]>>(`${this.baseUrl}/api/v1/listar-todos-produtos`);
  }

  excluirProduto(id: string) : Observable<ApiResponse<boolean>> {
    let params = new HttpParams().set('id', id);
    return this.http.delete<ApiResponse<boolean>>(`${this.baseUrl}/api/v1/produto`, { params: params });
  }
}
