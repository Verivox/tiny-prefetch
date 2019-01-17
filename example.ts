// import { GetParameters } from "./src/GetParameters";
// import { PrefetchGetRequests, UrlSettings } from "./src/PrefetchGetRequests";
//
// class VxUrlSettings implements UrlSettings {
//     public emptyErrorMessage = '{ "error": "empty" }';
//     public headers           = {
//         Accept  : 'application/json, application/vnd.verivox.energyLocation-v3+json',
//         material: this.generateObscureToken(),
//     };
//
//     private apiUrl = '{{apiUrl}}';
//
//     constructor(private parameter: GetParameters) {
//     }
//
//     public getUrls() {
//         return [
//             this.featureToggle(),
//             this.validateZipCode(),
//             this.borderlocations(),
//             this.benchnmark(),
//         ];
//     }
//
//     private generateObscureToken() {
//         const d                     = new Date();
//         const currentDate           = parseInt((+d / 1000 + d.getTimezoneOffset() * 60).toFixed(0), 10);
//         const year2000DateInSeconds = Date.parse('1/1/2000') / 1000;
//         const secondsSinceYear2000  = currentDate - year2000DateInSeconds;
//         return secondsSinceYear2000.toString().split('').reverse().join('');
//     }
//
//     private featureToggle() {
//         return `${this.apiUrl}/servicehook/features/energy`;
//     }
//
//     private validateZipCode() {
//         return `${this.apiUrl}/servicehook/geo/postcode/${this.parameter.get('plz')}`;
//     }
//
//     private borderlocations() {
//         return `${this.apiUrl}/servicehook/locations/${this.parameter.get('product')}/postCode/${this.parameter.get(
//             'plz')}`;
//     }
//
//     private benchnmark() {
//         const plz     = this.parameter.get('plz');
//         const usage   = this.parameter.get('usage');
//         const profile = this.parameter.get('profile');
//         let plocation = this.parameter.get('plocation');
//         const product = this.parameter.get('product');
//         plocation     = plocation ? plocation + '/' : '';
//
//         return `${this.apiUrl}/servicehook/benchmarks/${product}/profiles/${profile}/locations/${plz}/${plocation}?usage=${usage}`;
//     }
// }
//
// (window as any).prefetchedRequests = new PrefetchGetRequests(new VxUrlSettings(new GetParameters()));
//
//
// new VxUrlSettings(new GetParameters(), new Prefetch()).getMap()
