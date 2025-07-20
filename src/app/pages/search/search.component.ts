import { Component, inject, OnInit } from "@angular/core";
import { MasterService } from "../../service/master.service";
import { Observable } from "rxjs";
import { AsyncPipe, DatePipe, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [NgFor, AsyncPipe, FormsModule, DatePipe, RouterLink],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent implements OnInit {
  locations$: Observable<any[]> = new Observable<any[]>();
  masterSrv = inject(MasterService);

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.locations$ = this.masterSrv.getLocations();
  }
}
