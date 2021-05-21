import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayResPage } from './pay-res.page';

describe('PayResPage', () => {
  let component: PayResPage;
  let fixture: ComponentFixture<PayResPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayResPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
