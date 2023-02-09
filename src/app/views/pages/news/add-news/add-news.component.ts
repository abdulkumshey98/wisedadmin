import { Component, NgModule, OnInit } from '@angular/core';
import { PeoplesData, Person } from '../../../../core/dummy-datas/peoples.data';



@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {


  simpleItems: any = [];
  selectedSimpleItem: any = null;

  people: Person[] = [];
  selectedPersonId: string = '';

  selectedSearchPersonId: string = '';

  selectedPeople: any = null;

  groupedMultiSelectedPeople: any = null;

  customTemplateSelectedPeople: any = null;

  constructor() { }

  ngOnInit(): void {

    // simple array


  }
}
