export class Query {
    constructor(private queryString: string) {
    }

    public getParameters(): Map<string, string> {
        return new Map<string, string>(
            this.queryString.split('&').map(
                (pair) => pair.split('='),
            ) as [],
        );
    }

    public equals(other: Query): boolean {
        return this.queryString === other.queryString;
    }
}

export class HashQuery extends Query {
    /*
    Sometimes query strings can be found in the hash (i.e. AngularJS)
     */
    constructor(location: Location) {
        super(location.hash.split('?')[ 1 ]);
    }
}

export class SearchQuery extends Query {
    constructor(location: Location) {
        super(location.search.substr(1));
    }
}
