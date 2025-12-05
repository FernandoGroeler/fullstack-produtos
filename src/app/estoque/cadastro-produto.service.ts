import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroProduto } from './cadastro-produto';

@Injectable({
  providedIn: 'root',
})

export class CadastroProdutoService {
  constructor(private http: HttpClient) { }

  salvar(cadastroProduto: CadastroProduto) : Observable<CadastroProduto> {
    return this.http.post<CadastroProduto>('http://localhost:5021/api/v1/produto', cadastroProduto);
  }

  listarTodos(): Observable<CadastroProduto[]> {
    return this.http.get<CadastroProduto[]>('http://localhost:5021/api/v1/produto');
  }
}
