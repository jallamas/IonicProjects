import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevaCategoriaModalPage } from './nueva-categoria-modal.page';

describe('NuevaCategoriaModalPage', () => {
  let component: NuevaCategoriaModalPage;
  let fixture: ComponentFixture<NuevaCategoriaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCategoriaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaCategoriaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
