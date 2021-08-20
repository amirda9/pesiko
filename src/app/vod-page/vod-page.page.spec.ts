import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VodPagePage } from './vod-page.page';

describe('VodPagePage', () => {
  let component: VodPagePage;
  let fixture: ComponentFixture<VodPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VodPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
