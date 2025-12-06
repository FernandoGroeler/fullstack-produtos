import { Component, OnInit, signal } from '@angular/core';
import { ConsultaProdutoService } from './consulta-produto.service';
import { ConsultaProduto } from './consulta-produto';
import { ApiResponse } from '../../common/api-response.model';
import { Router } from '@angular/router';

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

  constructor(
    private service: ConsultaProdutoService,
    private router: Router
  ) { }

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

  novoProduto() {
    this.router.navigate(['/paginas/cadastro']);
  }

  preparaEditar(id: string) {
    this.router.navigate(['/paginas/cadastro'], { queryParams: { "id": id } });
  }

  excluirProduto(id: string) {
    this.service.excluirProduto(id).subscribe({
      next: (apiResponse : ApiResponse<boolean>) => {
        console.log(apiResponse.message, apiResponse.value);
        this.listarProdutos();
      },
      error: (apiResponse : ApiResponse<boolean>) => {
        console.log('Ocorreu um erro ao excluir o produto: ', apiResponse.errors[0]);
      }
    });
  }
}
