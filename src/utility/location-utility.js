import { noView, inject } from 'aurelia-framework';
import {Config} from 'resources/config';
//start-aurelia-decorators
@noView
@inject(Config)
//end-aurelia-decorators
export class LocationUtility {
  constructor(Config) {
    this.config = Config;
  }

  getCitiesList() {
    const cities = Object.keys(this.config.supported_cities);
    let cityCenter = {};

    for (const city of cities) {
    //   cityCenter.push({
    //     name: city,
    //     center: this.config.supported_cities[city].center
    //   });
      cityCenter[city.toLowerCase()] = this.config.supported_cities[city].center;
    }
    return cityCenter;
  }

  getCityCenter(region) {
    let self = this;
    let cities = this.getCitiesList();
    const provice = self.config.sub_regions[region.toLowerCase()];
    return cities[provice.toLowerCase()];
  }
}
