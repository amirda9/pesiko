import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VodModalPage } from './vod-modal.page';

describe('VodModalPage', () => {
  let component: VodModalPage;
  let fixture: ComponentFixture<VodModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VodModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
