import { Url } from './Url';
declare type UrlResponse = Promise<string>;
export declare class Urls {
    protected _results: Map<any, any>;
    constructor(urlArray?: Url[]);
    get(key: string): any;
    has(key: string): boolean;
    readonly [Symbol.toStringTag]: string;
    readonly size: number;
    [Symbol.iterator](): IterableIterator<[string, UrlResponse]>;
    clear(): void;
    delete(key: string): boolean;
    entries(): IterableIterator<[string, UrlResponse]>;
    forEach(callbackfn: (value: UrlResponse, key: string, map: Map<string, UrlResponse>) => void, thisArg?: any): void;
    keys(): IterableIterator<string>;
    set(key: string, value: Url): this;
    values(): IterableIterator<UrlResponse>;
}
export {};
