import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { ListpokemonComponent } from './listpokemon/listpokemon.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
