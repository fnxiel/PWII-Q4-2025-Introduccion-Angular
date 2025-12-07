import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaArtistas } from './pagina-artistas';

describe('PaginaArtistas', () => {
  let component: PaginaArtistas;
  let fixture: ComponentFixture<PaginaArtistas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaArtistas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaArtistas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
