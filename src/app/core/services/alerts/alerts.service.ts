import { Injectable } from '@angular/core';
import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService, NbToastrConfig, NbDialogService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private toastrService: NbToastrService,
    private dialogService: NbDialogService,

  ) { }

  success({ message, title = "Éxito", config }: { message: string, title?: string, config?: Partial<NbToastrConfig> }){
    this.toastrService.success(message, title, config);
  }

  warning(message: string, title?: string, config?: any) {
    this.toastrService.warning(message, title, config);
  }

  infoTopLeft({ message, title, config }: { message: string, title?: string, config?: Partial<NbToastrConfig> }) {

  }

  info({ message, title = "Alerta", config }: { message: string, title?: string, config?: Partial<NbToastrConfig> }) {
    this.toastrService.info(message, title, config);
  }

  error({ message, title, config }: { message: string, title?: string, config?: Partial<NbToastrConfig> }){
    this.toastrService.danger(message, title, config);
  }

  primary(message: string, title?: string, config?: Partial<NbToastrConfig> ) {
    this.toastrService.primary(message, title, config);
  }

  openDialogNebular({ dialog }: {dialog: any}) {
   return  this.dialogService.open(dialog, { context: '' });
  }
}
