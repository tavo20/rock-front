import { NgModule } from '@angular/core';

import { LoadingComponent } from './components/loading/loading.component';
import { StatusErrorComponent } from './components/status-error/status-error.component';
import { StatusEmptyComponent } from './components/status-empty/status-empty.component';

@NgModule({
  declarations: [
    LoadingComponent,
    StatusErrorComponent,
    StatusEmptyComponent
  ],
  exports: [
    LoadingComponent,
    StatusErrorComponent,
    StatusEmptyComponent
  ],
})
export class SharedModule { }
