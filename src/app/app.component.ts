import {HostListener,Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Akademe';
  @HostListener("window:beforeunload", ["$event"])
  handleKeyDown(event) {
    localStorage.clear();
  // alert("window")
  }
}
