import { Injectable } from '@angular/core';
import { APISchema } from '../api-objects/api-objects';
import { HttpClientService } from 'src/libs/http/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class DrugResourceService extends HttpClientService{

  static LIST_ACTION_URL = '/drugs';
  static DETAIL_ACTION_URL = '/drugs/:id';
  static CREATE_ACTION_URL = '/drugs';
  static UPDATE_ACTION_URL = '/drugs/:id';
  static DELETE_ACTION_URL = '/drugs/:id';

  listAction(params?: Record<string, any>) {
    return this.get<APISchema.Drug[]>(DrugResourceService.LIST_ACTION_URL, {
        params: params,
    });
  }
  deleteAction(id: number, params?: Record<string, any>) {
    return this.delete(DrugResourceService.DELETE_ACTION_URL.replace(':id', id.toString()), {
        params: params,
    });
  }
  detailAction(id: string, params?: Record<string, any>) {
    return this.get<APISchema.Drug>(DrugResourceService.DETAIL_ACTION_URL.replace(':id', id), {
        params: params,
    });
  }

  createAction(payload: {title: string,description:string, dosage:string }, params?: Record<string, any>) {
    return this.post<APISchema.Drug>(DrugResourceService.CREATE_ACTION_URL, payload, {
      params: params,
    });
  }

}
