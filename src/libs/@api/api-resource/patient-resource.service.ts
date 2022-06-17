import { Injectable } from '@angular/core';
import { APISchema } from '../api-objects/api-objects';
import { HttpClientService } from 'src/libs/http/http-client.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientResourceService extends HttpClientService {

  static LIST_ACTION_URL = '/patients';
  static DETAIL_ACTION_URL = '/patients/:id';
  static CREATE_ACTION_URL = '/patients';
  static UPDATE_ACTION_URL = '/patients/:id';
  static DELETE_ACTION_URL = '/patients/:id';

  listAction(params?: Record<string, any>) {
    return this.get<APISchema.Patient[]>(PatientResourceService.LIST_ACTION_URL, {
        params: params,
    });
  }
  deleteAction(id: number, params?: Record<string, any>) {
    return this.delete(PatientResourceService.DELETE_ACTION_URL.replace(':id', id.toString()), {
        params: params,
    });
  }
  detailAction(id: string, params?: Record<string, any>) {
    return this.get<APISchema.Patient>(PatientResourceService.DETAIL_ACTION_URL.replace(':id', id), {
        params: params,
    });
  }

  createAction(payload: {name: string, room: number, bed:number, dateOfBirth:""}, params?: Record<string, any>) {
    return this.post<APISchema.Patient>(PatientResourceService.CREATE_ACTION_URL, payload, {
      params: params,
    });
  }
}
