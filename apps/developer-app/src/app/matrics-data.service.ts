import { Injectable } from '@angular/core';
import { gql, Mutation, Query } from 'apollo-angular';

export interface MatricsData {
  name: string;
  model: string;
  price: string;
  roadAgeFrom: Date | string;
  roadAgeTo: Date | string;
  withInsurance: string;
}

export interface Response {
  matricData: MatricsData[];
}

@Injectable({
  providedIn: 'root',
})
export class MatricsDataSubmissionService extends Mutation {
  override document = gql`
    mutation matricsDataSubmission($id: Int!) {
      matricsDataSubmission(id: $id) {
        name
        model
        price
        roadAgeFrom
        roadAgeTo
        withInsurance
      }
    }
  `;
}

export class GetAllMatricsDataService extends Query<Response> {
  override document = gql`
    query allmatricData {
      matricData {
        name
        model
        price
        roadAgeFrom
        roadAgeTo
        withInsurance
      }
    }
  `;
}
