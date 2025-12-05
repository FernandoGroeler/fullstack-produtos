import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroProduto } from './cadastro-produto';
import { ApiResponse } from '../../common/api-response.model';

@Injectable({
  providedIn: 'root',
})

export class CadastroProdutoService {
  constructor(private http: HttpClient) { }

  salvar(cadastroProduto: CadastroProduto) : Observable<ApiResponse<CadastroProduto>> {
    if (cadastroProduto.id) {
      return this.http.put<ApiResponse<CadastroProduto>>(`http://localhost:5021/api/v1/produto`, cadastroProduto);
    }

    return this.http.post<ApiResponse<CadastroProduto>>('http://localhost:5021/api/v1/produto', cadastroProduto);
  }
}
