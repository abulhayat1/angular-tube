import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarCompactComponent } from './side-bar-compact.component';

describe('SideBarCompactComponent', () => {
  let component: SideBarCompactComponent;
  let fixture: ComponentFixture<SideBarCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarCompactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
