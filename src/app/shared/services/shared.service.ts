import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, last, lastValueFrom, map, Observable, of, ReplaySubject, Subject, tap } from 'rxjs';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private httpClient: HttpClient,
    private alertsService: AlertsService,

  ) { }

  public get<T>({ url, queryParams }: { url: string, queryParams?: any }): Observable<T> {
    let params = new HttpParams();
    if (queryParams) {
      for (let key in queryParams) {
        params = params.set(key, queryParams[key]);
      }
    }
    return this.httpClient.get(url, { observe: 'response', params }).pipe(
      map(this.handleResponseHttpClient.bind(this))
    );
  }

  public post<T>({ url, model }: { url: string; model: any }): Observable<T>  {
    return this.httpClient.post(url, model, { observe: 'response' }).pipe(
      map(this.handleResponseHttpClient.bind(this))
    );
  }

  private handleResponseHttpClient(response: any) {
    if (response.status === HttpStatusCode.Ok) {
      return response.body;
    } else {
      this.handleError();
      return null;
    }
  }



  handleError() {
    this.alertsService.error({ message: "Ocurrio un error", title: "Error" });
  }
}
