import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
  NbSelectModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbAutocompleteModule,
  NbCheckboxModule,
  NbIconModule,
  NbTabsetModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [],
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    CommonModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbInputModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    NbSelectModule,
    NbSpinnerModule,
    NbDatepickerModule.forRoot(),
    NbAutocompleteModule,
    NbCheckboxModule,
    NbIconModule,
    NbTabsetModule
  ],
  exports: [
    NbThemeModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbMenuModule,
    NbToastrModule,
    NbInputModule,
    NbCardModule,
    NbDialogModule,
    NbSelectModule,
    NbSpinnerModule,
    NbDatepickerModule,
    NbAutocompleteModule,
    NbEvaIconsModule,
    NbCheckboxModule,
    NbIconModule,
    NbTabsetModule,
  ],
})
export class NebularModule {}
