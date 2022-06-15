import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './message.datasource.config.json';

export class MessageDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'message';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.message', {optional: true})
    dsConfig: object = config,
  ) {
    dsConfig = Object.assign({}, dsConfig, {
      options: {baseUrl: process.env.CHAT_SERVICE_URL},
    });
    super(dsConfig);
  }
}