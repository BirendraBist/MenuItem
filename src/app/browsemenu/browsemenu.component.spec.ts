import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsemenuComponent } from './browsemenu.component';

describe('BrowsemenuComponent', () => {
  let component: BrowsemenuComponent;
  let fixture: ComponentFixture<BrowsemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
