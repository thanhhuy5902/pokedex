import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import * as PokeActions from '../../../ngrx/actions/poke.actions';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { PokeState } from '../../../ngrx/state/poke.state';
import { TuiDialogModule } from '@taiga-ui/core';
import { Poke } from '../../../models/poke.model';

@Component({
  selector: 'app-listpokemon',
  standalone: true,
  imports: [AsyncPipe, TuiDialogModule],
  templateUrl: './listpokemon.component.html',
  styleUrl: './listpokemon.component.scss',
})
export class ListpokemonComponent {
  selectedPoke: Poke[] = [];
  pokemon$ = this.store.select((state) => state.poke.poke);
  loading$ = this.store.select((state) => state.poke.loading);
  error$ = this.store.select((state) => state.poke.error);
  constructor(private store: Store<{ poke: PokeState }>) {
    this.store.dispatch(PokeActions.getPokemonList({ id: '1' }));
    console.log(this.pokemon$);
  }
  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog(item: Poke) {
    this.selectedPoke.push(item);
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }
  closeDialog() {
    this.selectedPoke = [];
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }
}
