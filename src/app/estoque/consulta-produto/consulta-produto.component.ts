import { Component, OnInit, signal } from '@angular/core';
import { ConsultaProdutoService } from './consulta-produto.service';
import { ConsultaProduto } from './consulta-produto';
import { ApiResponse } from '../../common/api-response.model';

@Component({
  selector: 'app-consulta-produto',
  standalone: false,
  templateUrl: './consulta-produto.component.html',
  styleUrl: './consulta-produto.component.css',
})

export class ConsultaProdutoComponent implements OnInit {
  listaProdutos = signal<ConsultaProduto[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private service: ConsultaProdutoService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  private listarProdutos(): void {
    this.isLoading.set(true);

    this.service.listarTodos().subscribe({
      next: (apiResponse : ApiResponse<ConsultaProduto[]>) => {
        this.listaProdutos.set(apiResponse.value as ConsultaProduto[]);
        this.isLoading.set(false);
      },
      error: (apiResponse : ApiResponse<ConsultaProduto[]>) => {
        this.error.set(`Erro ao carregar produtos: ${apiResponse.errors[0]}`);
        this.isLoading.set(false);
      }
    });
  }
}
