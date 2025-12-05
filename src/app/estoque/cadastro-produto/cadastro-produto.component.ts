import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastroProdutoService } from '../cadastro-produto.service';

@Component({
  selector: 'app-cadastro-produto',
  standalone: false,
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css',
})

export class CadastroProdutoComponent {
  produtoForm: FormGroup;

  constructor(private service: CadastroProdutoService) {
    this.produtoForm = new FormGroup({
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
        next: produto => {
          console.log('Salvo com sucesso!', produto);
          this.produtoForm.reset();
        },
        error: erro => console.log('Ocorreu um erro: ', erro)
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.produtoForm.get(nomeCampo);
    return campo ? campo.invalid && (campo.dirty || campo.touched) && campo.errors?.['required'] : false;
  }
}
