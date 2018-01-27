import { APIGatewayEvent, Callback, Context } from 'aws-lambda';
import {Service} from '../services/service';
import {inject} from 'typescript-inject';
import {CORS_HEADERS, STATUS_CODE_SERVER_ERROR, STATUS_CODE_SUCCESS} from 'aws-lambda-utils';

require('../domain.context');

const service: Service = inject<Service>('Service');

export function handler(event: APIGatewayEvent, context: Context, callback: Callback) {

  service.findAll()
    .then(results => callback(null, {statusCode: STATUS_CODE_SUCCESS, headers: CORS_HEADERS, body: JSON.stringify(results)}))
    .catch(exception => callback(null, {statusCode: STATUS_CODE_SERVER_ERROR, headers: CORS_HEADERS, body: JSON.stringify(exception)}));
}
