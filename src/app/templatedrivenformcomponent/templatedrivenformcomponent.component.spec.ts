import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenformcomponentComponent } from './templatedrivenformcomponent.component';

describe('TemplatedrivenformcomponentComponent', () => {
  let component: TemplatedrivenformcomponentComponent;
  let fixture: ComponentFixture<TemplatedrivenformcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedrivenformcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivenformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
