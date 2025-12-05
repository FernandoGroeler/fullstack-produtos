import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  standalone: false,
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css',
})

export class CadastroProduto {
  produtoForm: FormGroup;

  constructor() {
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
      console.log('Valores digitados:', this.produtoForm.value);
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.produtoForm.get(nomeCampo);
    return campo ? campo.invalid && (campo.dirty || campo.touched) && campo.errors?.['required'] : false;
  }
}
