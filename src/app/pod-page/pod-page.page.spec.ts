import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PodPagePage } from './pod-page.page';

describe('PodPagePage', () => {
  let component: PodPagePage;
  let fixture: ComponentFixture<PodPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PodPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
