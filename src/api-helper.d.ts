import { FastifyInstance, FastifyReply, FastifyRequest, FastifySchema, FastifyTypeProviderDefault, RawServerDefault } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
export interface IReply {
    status: number;
    message: string;
    body?: any;
}
export declare class ApiError {
    message: string;
    code: number;
    constructor(message: string, code: number);
}
export interface ApiHelperHandler<Body, Querystring, Headers, Params, Reply> {
    (request: FastifyRequest<{
        Body?: Body | never;
        Querystring: Querystring;
        Headers: Headers;
        Params: Params;
        Reply: Reply;
    }, RawServerDefault, IncomingMessage, FastifySchema>, reply: FastifyReply<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, {
        Body?: Body | never;
        Querystring: Querystring;
        Headers: Headers;
        Params: Params;
        Reply: Reply;
    }, unknown, FastifySchema, FastifyTypeProviderDefault, Reply>): void;
}
export declare class ApiHelper {
    static get<Querystring, Params, Headers>(app: FastifyInstance, url: string, handler: ApiHelperHandler<Body, Querystring, Headers, Params, IReply>, options?: any): void;
    static post<Body, Querystring, Params, Headers>(app: FastifyInstance, url: string, handler: ApiHelperHandler<Body, Querystring, Headers, Params, IReply>): void;
    static put<Body, Querystring, Params, Headers>(app: FastifyInstance, url: string, handler: ApiHelperHandler<Body, Querystring, Headers, Params, IReply>): void;
    static delete<Querystring, Params, Headers>(app: FastifyInstance, url: string, handler: ApiHelperHandler<Body, Querystring, Headers, Params, IReply>): void;
    static callFailed(reply: FastifyReply<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, {
        Body?: any | undefined;
        Querystring: {};
        Headers: {};
        Params: {};
        Reply: IReply;
    }, unknown, FastifySchema, FastifyTypeProviderDefault, IReply>, error?: string, status?: number): void;
    static missingParameters(reply: FastifyReply<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, {
        Body?: any | undefined;
        Querystring: {};
        Headers: {};
        Params: {};
        Reply: IReply;
    }, unknown, FastifySchema, FastifyTypeProviderDefault, IReply>, error?: string, status?: number): void;
    static success(reply: FastifyReply<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, {
        Body?: any | undefined;
        Querystring: {};
        Headers: {};
        Params: {};
        Reply: IReply;
    }, unknown, FastifySchema, FastifyTypeProviderDefault, IReply>, payload?: {}): void;
}
