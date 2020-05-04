import {Entity, model, property} from '@loopback/repository';

@model()
export class Plan extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  planKey?: number;

  @property({
    type: 'number',
  })
  calories?: number;

  @property({
    type: 'number',
  })
  percentFat?: number;

  @property({
    type: 'number',
  })
  percentCarbs?: number;

  @property({
    type: 'number',
  })
  percentProtein?: number;

  @property({
    type: 'number',
  })
  activityLevel?: number;

  @property({
    type: 'number',
  })
  sugar?: number;

  @property({
    type: 'number',
  })
  fiber?: number;

  @property({
    type: 'number',
  })
  cholesterol?: number;


  constructor(data?: Partial<Plan>) {
    super(data);
  }
}

export interface PlanRelations {
  // describe navigational properties here
}

export type PlanWithRelations = Plan & PlanRelations;
