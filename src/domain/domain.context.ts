import {register} from 'typescript-inject';
import {DynamoDbBuilder} from 'aws-sdk-fluent-builder';
import {Service} from './services/service';

require('../global.context');

register('Repository', () => new DynamoDbBuilder().withTableName(process.env.DYNAMODB_TABLE).build());
register('Service', () => new Service());
