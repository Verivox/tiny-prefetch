export declare class Query {
    private queryString;
    constructor(queryString: string);
    asMap(): Map<string, string>;
    equals(other: Query): boolean;
}
export declare class HashQuery extends Query {
    constructor(location?: Location);
}
export declare class SearchQuery extends Query {
    constructor(location?: Location);
}
