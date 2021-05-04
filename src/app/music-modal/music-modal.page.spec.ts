import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicModalPage } from './music-modal.page';

describe('MusicModalPage', () => {
  let component: MusicModalPage;
  let fixture: ComponentFixture<MusicModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
