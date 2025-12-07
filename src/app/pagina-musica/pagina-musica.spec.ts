import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMusica } from './pagina-musica';

describe('PaginaMusica', () => {
  let component: PaginaMusica;
  let fixture: ComponentFixture<PaginaMusica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMusica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMusica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
