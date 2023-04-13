import { Component, NgModule, OnInit } from '@angular/core';
import { countries, countryAvail, PeoplesData, Person } from '../../../../core/dummy-datas/peoples.data';



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

  selectedSearchPersonIds: string = '';
  selectedPeople: any = null;

  groupedMultiSelectedPeople: any = null;

  customTemplateSelectedPeople: any = null;

  constructor() { }

  ngOnInit(): void {

    // simple array
    this.simpleItems = [true, 'Two', 3];

    // array of objects
    this.people = PeoplesData.peoples;

  }

  items = ['Pizza', 'Pasta', 'Parmesan'];
  itemsAsObjects = [{id: 0, name: 'Pizza', readonly: true}, {id: 1, name: 'Pasta'}, {id: 2, name: 'Parmesan', readonly: true}];
  itemsWithMaxLimit = ['Pizza', 'Pasta', 'Parmesan'];



  onAdd(item: any) {
    console.log('tag added: value is ' + item.value);
  }

  onSelect(item: any) {
    console.log('tag selected: value is ' + item);
  }

  onTagEdited(item: any) {
    console.log('tag edited: current value is ' + item);
  }

  onTextChange(text: any) {
    console.log('text changed: value is ' + text);
  }
}
