import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastroProdutoService } from './cadastro-produto.service';
import { ApiResponse } from '../../common/api-response.model';
import { CadastroProduto } from './cadastro-produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  standalone: false,
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css',
})

export class CadastroProdutoComponent implements OnInit {
  produtoForm: FormGroup;
  atualizandoProduto: boolean = false;

  constructor(
    private service: CadastroProdutoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.produtoForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.required),
      descricao: new FormControl(''),
      preco: new FormControl(0, [Validators.required, Validators.min(0)]),
      estoqueAtual: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
  }

  salvar() {
    this.produtoForm.markAllAsTouched();

    if (this.produtoForm.valid) {
      this.service.salvar(this.produtoForm.value).subscribe({
        next: (apiResponse : ApiResponse<CadastroProduto>) => {
          console.log(apiResponse.message, apiResponse.value);
          this.produtoForm.reset();
        },
        error: (apiResponse : ApiResponse<CadastroProduto>) => console.log('Ocorreu um erro: ', apiResponse.errors[0])
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.produtoForm.get(nomeCampo);
    return campo ? campo.invalid && (campo.dirty || campo.touched) && campo.errors?.['required'] : false;
  }

  obterPorId(id: string) {
    this.service.obterProdutoPorId(id).subscribe({
      next: (apiResponse : ApiResponse<CadastroProduto>) => {
        let value = apiResponse.value as CadastroProduto;

        this.produtoForm.patchValue({
          id: value.id,
          nome: value.nome,
          descricao: value.descricao,
          preco: value.preco,
          estoqueAtual: value.estoqueAtual
        });
      },
      error: (apiResponse : ApiResponse<CadastroProduto>) => console.log('Ocorreu um erro: ', apiResponse.errors[0])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe( (query: any) => {
      const params = query['params'];
      const id = params['id'];

      this.atualizandoProduto = false;

      if (id) {
        this.atualizandoProduto = true;
        this.obterPorId(id);
      }
    });
  }
}
