import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VodComponent } from './vod.component';

describe('VodComponent', () => {
  let component: VodComponent;
  let fixture: ComponentFixture<VodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
