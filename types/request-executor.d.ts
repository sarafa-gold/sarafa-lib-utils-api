import { AxiosRequestConfig } from "axios";
export declare const getApiBaseUrl: () => string;
export declare enum HTTP_METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare const requestExecutor: (url: string, options?: AxiosRequestConfig, retries?: number) => Promise<any>;
