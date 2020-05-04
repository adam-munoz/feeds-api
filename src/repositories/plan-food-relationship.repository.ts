import {DefaultCrudRepository} from '@loopback/repository';
import {PlanFoodRelationship, PlanFoodRelationshipRelations} from '../models';
import {NeedsForFeedsDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlanFoodRelationshipRepository extends DefaultCrudRepository<
  PlanFoodRelationship,
  number,
  PlanFoodRelationshipRelations
> {
  constructor(
    @inject('datasources.NeedsForFeedsDB') dataSource: NeedsForFeedsDbDataSource,
  ) {
    super(PlanFoodRelationship, dataSource);
  }
}
