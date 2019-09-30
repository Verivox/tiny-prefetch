export interface IUrl {
    readonly url: string;
    readonly headers?: any;
    readonly errorMessage: string;
    toPromise(): Promise<string | RequestResponse>;
}
export declare class RequestResponse {
    response?: Response | undefined;
    error?: string | undefined;
    constructor(response?: Response | undefined, error?: string | undefined);
}
export declare class Url implements IUrl {
    readonly url: string;
    readonly headers?: any;
    readonly errorMessage: string;
    protected _fetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof fetch;
    protected _results: Promise<string>;
    constructor(url: string, headers?: any, errorMessage?: string, _fetch?: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof fetch);
    protected fetch(): Promise<string>;
    toPromise(): Promise<string>;
}
export declare class UrlRequest implements IUrl {
    readonly url: string;
    readonly headers?: any;
    readonly errorMessage: string;
    protected _fetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof fetch;
    protected _results: Promise<RequestResponse>;
    constructor(url: string, headers?: any, errorMessage?: string, _fetch?: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof fetch);
    protected fetch(): Promise<RequestResponse>;
    toPromise(): Promise<RequestResponse>;
}
