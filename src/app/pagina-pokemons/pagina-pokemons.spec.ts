import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPokemons } from './pagina-pokemons';

describe('PaginaPokemons', () => {
  let component: PaginaPokemons;
  let fixture: ComponentFixture<PaginaPokemons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPokemons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPokemons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
