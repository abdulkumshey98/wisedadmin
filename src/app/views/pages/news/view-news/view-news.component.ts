import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { DataTable } from "simple-datatables";
import { DropdownsComponent } from '../../ui-components/dropdowns/dropdowns.component';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss'],
  preserveWhitespaces: true
})
export class ViewNewsComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  // const dataTable = new DataTable("#newsTable");

  }

}




