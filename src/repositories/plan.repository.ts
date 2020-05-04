import {DefaultCrudRepository} from '@loopback/repository';
import {Plan, PlanRelations} from '../models';
import {NeedsForFeedsDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlanRepository extends DefaultCrudRepository<
  Plan,
  typeof Plan.prototype.planKey,
  PlanRelations
> {
  constructor(
    @inject('datasources.NeedsForFeedsDB') dataSource: NeedsForFeedsDbDataSource,
  ) {
    super(Plan, dataSource);
  }
}
