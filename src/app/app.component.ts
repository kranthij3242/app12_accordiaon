import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accordionData = [{
    title: "Personal Data",
    firstName: "Kranthi",
    lastName: "kumar",
    birthYear: 1991
}, {
    title: "Contacts",
    phone: "98487654321",
    email: "test@test.com"
}, {
    title: "Address",
    state: "AP",
    city: "Nelloe",
    street: "Gandhi street"
}];
getItemKeys (item) {
    return Object.keys(item);
}

}
