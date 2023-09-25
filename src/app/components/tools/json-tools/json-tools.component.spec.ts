import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToolsComponent } from './json-tools.component';

describe('JsonToolsComponent', () => {
  let component: JsonToolsComponent;
  let fixture: ComponentFixture<JsonToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonToolsComponent]
    });
    fixture = TestBed.createComponent(JsonToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
