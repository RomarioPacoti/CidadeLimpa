import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanaisDeAtendimentoPage } from './canais-de-atendimento.page';

describe('CanaisDeAtendimentoPage', () => {
  let component: CanaisDeAtendimentoPage;
  let fixture: ComponentFixture<CanaisDeAtendimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanaisDeAtendimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanaisDeAtendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
