import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarConvidadosComponent } from './cadastrar-convidados.component';

describe('CadastrarConvidadosComponent', () => {
  let component: CadastrarConvidadosComponent;
  let fixture: ComponentFixture<CadastrarConvidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarConvidadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarConvidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
