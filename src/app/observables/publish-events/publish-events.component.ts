import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-publish-events",
  templateUrl: "./publish-events.component.html",
  styleUrls: ["./publish-events.component.css"],
})
export class PublishEventsComponent implements OnInit, AfterViewInit {
  inputForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      name: new FormControl(),
    });
  }

  checkCode(x) {
    if (x.key == "Escape") {
      this.inputForm.reset();
    }
  }

  ngAfterViewInit() {
    const element = document.getElementById("key-events");
    const keydown = fromEvent(element, "keydown");

    keydown.subscribe((x) => this.checkCode(x));
  }
}
