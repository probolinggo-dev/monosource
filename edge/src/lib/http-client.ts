import request from 'superagent';
import qs from 'qs';
import logger from './logger';
import winston from 'winston';
import ErrorStackParser from 'error-stack-parser';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export abstract class HttpClient {
  private host: string;
  private maxRetries: number;
  private serviceName: string;
  private logger: winston.Logger;
  log: winston.LogMethod;

  constructor(params: { host: string; maxRetries?: number }) {
    this.host = params.host;
    this.maxRetries = params.maxRetries || 2;
    this.serviceName = this.constructor.toString().match(/\w+/g)[1];
    this.logger = logger;
    this.log = logger.log;
  }

  private sendRequest(params: {
    method: HttpMethod;
    path: string;
    headers?: Record<string, string>;
    body?: Record<string, any>;
    query?: Record<string, any>;
  }): request.SuperAgentRequest {
    const { method, path, headers = {}, body = '{}', query = {} } = params;
    switch (method) {
      case HttpMethod.POST:
        return request
          .post(this.host + path)
          .set(headers)
          .send(JSON.stringify(body))
          .query(qs.stringify(query))
          .retry(this.maxRetries);
      case HttpMethod.GET:
        return request
          .get(this.host + path)
          .set(headers)
          .query(qs.stringify(query))
          .retry(this.maxRetries);
      case HttpMethod.PUT:
        return request
          .put(this.host + path)
          .set(headers)
          .send(JSON.stringify(body))
          .query(qs.stringify(query))
          .retry(this.maxRetries);
      case HttpMethod.DELETE:
        return request
          .delete(this.host + path)
          .set(headers)
          .send(JSON.stringify(body))
          .query(qs.stringify(query))
          .retry(this.maxRetries);
    }
  }

  async call<T>(params: {
    method: HttpMethod;
    path: string;
    headers?: Record<string, string>;
    body?: Record<string, any>;
    query?: Record<string, any>;
  }): Promise<T> {
    const stack = ErrorStackParser.parse(new Error());
    const callerMethod = stack[1]?.functionName || '';

    try {
      this.logger.info(
        `[${this.serviceName}][${callerMethod}][HTTP ${
          params.method
        }] body: ${JSON.stringify(
          params.body || {}
        )} | headers: ${JSON.stringify(
          params.headers || ''
        )} | query ${JSON.stringify(params.query || {})}`
      );
      const response = await this.sendRequest(params);
      return response.body;
    } catch (error) {
      const err = error as request.ResponseError;
      this.logger.error(
        `[${this.serviceName}][${callerMethod}][HTTP ${params.method}] ${err.message}`
      );
      throw err;
    }
  }
}
