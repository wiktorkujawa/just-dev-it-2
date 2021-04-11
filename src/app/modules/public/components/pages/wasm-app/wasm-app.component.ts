import { Component, OnDestroy, OnInit } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-wasm-app',
  templateUrl: './wasm-app.component.html',
  styleUrls: ['./wasm-app.component.scss']
})
export class WasmAppComponent implements OnInit {

  constructor() {}


  initWasm(){
    get("assets/wasm/index.js", () => {
      console.log("index loaded");
    });
    get("assets/wasm/runIndex.js", () => {
      console.log("run index loaded");
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  ngOnInit(): void {
      this.initWasm();
  }
}
