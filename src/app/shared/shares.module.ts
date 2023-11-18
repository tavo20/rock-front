import { NgModule } from '@angular/core';

import { LoadingComponent } from './components/loading/loading.component';
import { StatusErrorComponent } from './components/status-error/status-error.component';

@NgModule({
  declarations: [
    LoadingComponent,
    StatusErrorComponent
  ],
  exports: [
    LoadingComponent,
    StatusErrorComponent
  ],
})
export class SharedModule { }
