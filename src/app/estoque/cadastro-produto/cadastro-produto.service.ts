import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroProduto } from './cadastro-produto';
import { ApiResponse } from '../../common/api-response.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})

export class CadastroProdutoService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  salvar(cadastroProduto: CadastroProduto) : Observable<ApiResponse<CadastroProduto>> {
    if (cadastroProduto.id) {
      return this.http.put<ApiResponse<CadastroProduto>>(`${this.baseUrl}/api/v1/produto`, cadastroProduto);
    }

    return this.http.post<ApiResponse<CadastroProduto>>(`${this.baseUrl}/api/v1/produto`, cadastroProduto);
  }

  obterProdutoPorId(id: string) : Observable<ApiResponse<CadastroProduto>> {
    let params = new HttpParams().set('id', id);
    return this.http.get<ApiResponse<CadastroProduto>>(`${this.baseUrl}/api/v1/produto`, { params: params });
  }
}
