import { Component, OnInit } from "@angular/core";
import { EncodingTools } from "../_helpers/EncodingTools";
import { User } from "@app/_models";
import { AuthenticationService } from "@app/_services";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.less"],
})
export class AccountComponent implements OnInit {
  username: string;
  firstName: string;
  lastName: string;

  constructor(private authenticationService: AuthenticationService) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit() {
    const tempUser: User = this.authenticationService.currentUserValue;
    this.username = tempUser.username;
    this.firstName = tempUser.firstName;
    this.lastName = tempUser.lastName;
  }
}
