import {Entity, model, property} from '@loopback/repository';

@model()
export class Food extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  foodKey?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  subName?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
  })
  servingSizeImperial?: number;

  @property({
    type: 'string',
  })
  servingSizeImperialMeasure?: string;

  @property({
    type: 'number',
  })
  servingSizeMetric?: number;

  @property({
    type: 'string',
  })
  servingSizeMetricMeasure?: string;

  @property({
    type: 'number',
  })
  calories?: number;

  @property({
    type: 'number',
  })
  gFat?: number;

  @property({
    type: 'number',
  })
  gCarbs?: number;

  @property({
    type: 'number',
  })
  gProtein?: number;

  @property({
    type: 'number',
  })
  gSugar?: number;

  @property({
    type: 'number',
  })
  mgSodium?: number;

  @property({
    type: 'number',
  })
  gFiber?: number;

  @property({
    type: 'number',
  })
  mgCholesterol?: number;

  @property({
    type: 'number',
  })
  maxDailyServings?: number;

  @property({
    type: 'number',
  })
  minDailyServings?: number;

  @property({
    type: 'boolean',
  })
  hasGluten?: boolean;

  @property({
    type: 'boolean',
  })
  isPescatarian?: boolean;

  @property({
    type: 'boolean',
  })
  isVegetarian?: boolean;

  @property({
    type: 'boolean',
  })
  isVegan?: boolean;

  @property({
    type: 'string',
  })
  keywords?: string;


  constructor(data?: Partial<Food>) {
    super(data);
  }
}

export interface FoodRelations {
  // describe navigational properties here
}

export type FoodWithRelations = Food & FoodRelations;
