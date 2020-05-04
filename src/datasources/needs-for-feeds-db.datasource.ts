import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'NeedsForFeedsDB',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'qRoEPr9!j32Fecxze2320323',
  database: 'Feeds'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class NeedsForFeedsDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'NeedsForFeedsDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.NeedsForFeedsDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
