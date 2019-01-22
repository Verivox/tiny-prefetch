import { HashQuery, Query } from "./src/GetParameters";
import { Prefetch } from "./src/PrefetchGetRequests";

class VxUrlSettings {

    private apiUrl = '{{apiUrl}}';

    constructor(private query: Map<string, string>,
                private prefetch: Prefetch) {
    }

    private generateObscureToken() {
        const d                     = new Date();
        const currentDate           = parseInt((+d / 1000 + d.getTimezoneOffset() * 60).toFixed(0), 10);
        const year2000DateInSeconds = Date.parse('1/1/2000') / 1000;
        const secondsSinceYear2000  = currentDate - year2000DateInSeconds;
        return secondsSinceYear2000.toString().split('').reverse().join('');
    }

    private featureToggle() {
        return `${this.apiUrl}/servicehook/features/energy`;
    }

    private validateZipCode() {
        return `${this.apiUrl}/servicehook/geo/postcode/${this.query.get('plz')}`;
    }

    private borderlocations() {
        return `${this.apiUrl}/servicehook/locations/${this.query.get('product')}/postCode/${this.query.get(
            'plz')}`;
    }

    private benchnmark() {
        const plz     = this.query.get('plz');
        const usage   = this.query.get('usage');
        const profile = this.query.get('profile');
        let plocation = this.query.get('plocation');
        const product = this.query.get('product');
        plocation     = plocation ? plocation + '/' : '';

        return `${this.apiUrl}/servicehook/benchmarks/${product}/profiles/${profile}/locations/${plz}/${plocation}?usage=${usage}`;
    }

    public [Symbol.iterator ]() {
        return [
            this.featureToggle(),
            this.validateZipCode(),
            this.borderlocations(),
            this.benchnmark(),
        ].map((url) => [ url, this.prefetch.fetch(url) ])[Symbol.iterator]()
    }
}

function getResponses () {


}

(window as any).responses = new Map<string, string>(
    new VxUrlSettings(
        new SearchQuery({} as Location).getParameters(),
        new Prefetch(
            {
                Accept  : 'application/json, application/vnd.verivox.energyLocation-v3+json',
                material: new ObscureToken() this.generateObscureToken(),
            },
            '{ "error": "empty" }',
        )
    )[Symbol.iterator]()
)
