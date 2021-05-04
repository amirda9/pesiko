import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HamComponent } from './ham.component';

describe('HamComponent', () => {
  let component: HamComponent;
  let fixture: ComponentFixture<HamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
