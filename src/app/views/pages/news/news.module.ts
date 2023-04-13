import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatherIconModule } from '../../../core/feather-icon/feather-icon.module';

// ngx-quill
import { QuillModule } from 'ngx-quill';
import { TagInputModule } from 'ngx-chips';


// angular-archwizard
import { ArchwizardModule } from 'angular-archwizard';
import { NewsComponent } from './news.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NgbDropdown, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewsComponent } from './add-news/add-news.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxChipsComponent } from '../advanced-form-elements/ngx-chips/ngx-chips.component';
import { OtherDetailsComponent } from './other-details/other-details.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'view-news',
        pathMatch: 'full'
      },
      {
        path: 'view-news',
        component: ViewNewsComponent
      },
       {
        path: 'add-news',
        component: AddNewsComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    AddNewsComponent,
    OtherDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    TagInputModule,
    NgSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FeatherIconModule,
    QuillModule.forRoot(), // ngx-quill
    ArchwizardModule, // angular-archwizard
  ]
})
export class NewsModule { }
