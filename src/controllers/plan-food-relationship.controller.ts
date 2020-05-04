import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {PlanFoodRelationship} from '../models';
import {PlanFoodRelationshipRepository} from '../repositories';

export class PlanFoodRelationshipController {
  constructor(
    @repository(PlanFoodRelationshipRepository)
    public planFoodRelationshipRepository : PlanFoodRelationshipRepository,
  ) {}

  @post('/plan-food-relationship', {
    responses: {
      '200': {
        description: 'PlanFoodRelationship model instance',
        content: {'application/json': {schema: getModelSchemaRef(PlanFoodRelationship)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanFoodRelationship, {
            title: 'NewPlanFoodRelationship'
          }),
        },
      },
    })
    planFoodRelationship: Omit<PlanFoodRelationship, 'id'>,
  ): Promise<PlanFoodRelationship> {
    return this.planFoodRelationshipRepository.create(planFoodRelationship);
  }

  @get('/plan-food-relationship/count', {
    responses: {
      '200': {
        description: 'PlanFoodRelationship model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PlanFoodRelationship) where?: Where<PlanFoodRelationship>,
  ): Promise<Count> {
    return this.planFoodRelationshipRepository.count(where);
  }

  @get('/plan-food-relationship', {
    responses: {
      '200': {
        description: 'Array of PlanFoodRelationship model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PlanFoodRelationship, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PlanFoodRelationship) filter?: Filter<PlanFoodRelationship>,
  ): Promise<PlanFoodRelationship[]> {
    return this.planFoodRelationshipRepository.find(filter);
  }

  @patch('/plan-food-relationship', {
    responses: {
      '200': {
        description: 'PlanFoodRelationship PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanFoodRelationship, {partial: true}),
        },
      },
    })
    planFoodRelationship: PlanFoodRelationship,
    @param.where(PlanFoodRelationship) where?: Where<PlanFoodRelationship>,
  ): Promise<Count> {
    return this.planFoodRelationshipRepository.updateAll(planFoodRelationship, where);
  }

  @del('/plan-food-relationship', {
    responses: {
      '204': {
        description: 'PlanFoodRelationship DELETE success',
      },
    },
  })
  async delete(
    @requestBody({
      content: { 
        'application/json': {
          schema: getModelSchemaRef(PlanFoodRelationship, { title: 'DeletePlanFoodRelationship'}),
        }
      }
    })
    planFoodRelationship: PlanFoodRelationship
  ): Promise<void> {
    await this.planFoodRelationshipRepository.delete(planFoodRelationship);
  }
}
