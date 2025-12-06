import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaProduto } from './consulta-produto';
import { ApiResponse } from '../../common/api-response.model';

@Injectable({
  providedIn: 'root',
})

export class ConsultaProdutoService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<ApiResponse<ConsultaProduto[]>> {
    return this.http.get<ApiResponse<ConsultaProduto[]>>('http://localhost:5021/api/v1/listar-todos-produtos');
  }

  excluirProduto(id: string) : Observable<ApiResponse<boolean>> {
    let params = new HttpParams().set('id', id);
    return this.http.delete<ApiResponse<boolean>>('http://localhost:5021/api/v1/produto', { params: params });
  }
}
