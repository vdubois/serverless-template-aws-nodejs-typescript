import {DynamoDbRepository} from 'aws-sdk-fluent-builder';
import {inject} from 'typescript-inject';

export class Service {

  constructor(private repository: DynamoDbRepository = inject<DynamoDbRepository>('Repository')) {
  }

  findAll(): Promise<any> {
    return this.repository.findAll();
  }
}
