import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasmAppComponent } from './wasm-app.component';

describe('WasmAppComponent', () => {
  let component: WasmAppComponent;
  let fixture: ComponentFixture<WasmAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasmAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasmAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
