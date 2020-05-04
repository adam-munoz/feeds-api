import {DefaultCrudRepository} from '@loopback/repository';
import {Food, FoodRelations} from '../models';
import {NeedsForFeedsDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FoodRepository extends DefaultCrudRepository<
  Food,
  typeof Food.prototype.foodKey,
  FoodRelations
> {
  constructor(
    @inject('datasources.NeedsForFeedsDB') dataSource: NeedsForFeedsDbDataSource,
  ) {
    super(Food, dataSource);
  }
}
