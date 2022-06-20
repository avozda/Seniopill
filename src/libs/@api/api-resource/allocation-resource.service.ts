import { Injectable } from '@angular/core';
import { APISchema } from '../api-objects/api-objects';
import { HttpClientService } from 'src/libs/http/http-client.service';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AllocationResourceService extends HttpClientService {
  static LIST_ACTION_URL = '/allocation';
  static DETAIL_ACTION_URL = '/allocation/:id';
  static CREATE_ACTION_URL = '/allocation';
  static UPDATE_ACTION_URL = '/allocation/:id';
  static DELETE_ACTION_URL = '/allocation/:id';

  listAction(params?: Record<string, any>) {
    return this.get<APISchema.Allocation[]>(
      AllocationResourceService.LIST_ACTION_URL,
      {
        params: params,
      }
    );
  }
  deleteAction(id: number, params?: Record<string, any>) {
    return this.delete(
      AllocationResourceService.DELETE_ACTION_URL.replace(':id', id.toString()),
      {
        params: params,
      }
    );
  }
  detailAction(id: string, params?: Record<string, any>) {
    return this.get<APISchema.Allocation>(
      AllocationResourceService.DETAIL_ACTION_URL.replace(':id', id),
      {
        params: params,
      }
    );
  }

  createAction(
    payload: {
      patientId: number;
      drugId: number;
      dosage: string;
      notify: boolean;
      date: Date;
    },
    params?: Record<string, any>
  ) {
    return this.post<APISchema.Allocation>(
      AllocationResourceService.CREATE_ACTION_URL,
      payload,
      {
        params: params,
      }
    );
  }
  updateAction(
    id: string,
    payload: {
      patientId: number;
      drugId: number;
      dosage: string;
      notify: boolean;
      date: Date;
    },
    params?: Record<string, any>
  ) {
    return this.put<APISchema.Allocation>(
      AllocationResourceService.UPDATE_ACTION_URL.replace(':id', id),
      payload,
      {
        params: params,
      }
    );
  }
}
