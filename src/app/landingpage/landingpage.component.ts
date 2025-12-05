import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})

export class LandingpageComponent {
  constructor(private router: Router) { }

  navegarParaPaginas(): void {
    this.router.navigate(['/paginas']);
  }
}
