import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-trafic-signal",
  templateUrl: "./trafic-signal.component.html",
  styleUrls: ["./trafic-signal.component.css"]
})
export class TraficSignalComponent implements OnInit {
  isRed = false;
  isYellow = false;
  isGreen = false;
  constructor() {}

  ngOnInit() {}

  redSignal() {
    this.clearAll();
    this.isRed = true;
  }
  yellowSignal() {
    this.clearAll();
    this.isYellow = true;
  }

  greenSignal() {
    this.clearAll();
    this.isGreen = true;
  }
  clearAll() {
    this.isRed = false;
    this.isYellow = false;
    this.isGreen = false;
  }
}
