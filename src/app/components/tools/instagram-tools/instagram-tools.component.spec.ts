import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramToolsComponent } from './instagram-tools.component';

describe('InstagramToolsComponent', () => {
  let component: InstagramToolsComponent;
  let fixture: ComponentFixture<InstagramToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramToolsComponent]
    });
    fixture = TestBed.createComponent(InstagramToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
