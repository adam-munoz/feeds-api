import {Entity, model, property} from '@loopback/repository';

@model()
export class PlanFoodRelationship extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  planKey: number;

  @property({
    type: 'number',
    required: true,
  })
  foodKey?: number;


  constructor(data?: Partial<PlanFoodRelationship>) {
    super(data);
  }
}

export interface PlanFoodRelationshipRelations {
  // describe navigational properties here
}

export type PlanFoodRelationshipWithRelations = PlanFoodRelationship & PlanFoodRelationshipRelations;
