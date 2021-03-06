import { bindable, customElement } from 'aurelia-framework';
import { Config } from 'resources/config';
import { inject, observable } from 'aurelia-framework';

//start-aurelia-decorators
@customElement('screen-popup')
@inject(Config)
//end-aurelia-decorators
export class ScreenPopup {
  //start-aurelia-decorators
  @bindable cities;
  @bindable selcity;
  @bindable switchCity;
  //end-aurelia-decorators
  @observable query;
  constructor(Config) {
    this.config = Config.map;
  }


  isCitySupported(querycity) {
    return querycity in this.config.instance_regions;
  }

  queryChanged(newval, oldval) {
    $('#dropdown_city').on('click', function() {
      $(this).toggleClass('clicked');
    });
    this.searchText = newval.toLowerCase();
    // if(this.searchText.length > 0){
    //   $('#dropdown_city').show();
    // }else{
    //   $('#dropdown_city').hide();
    // }

    const map = Object.keys(this.config.sub_regions);
    // console.log(map)
    let newObj = map.filter(value => {
      return value.indexOf(newval.toLowerCase()) !== -1 ? value : null;
    });
    this.searchResult = newObj;
    if (this.searchResult <= 0) {
      $('#dropdown_city').hide();
    }
  }

  switchRegion(city) {
    $('#screen').css('display', 'none');
  }

  attached() {
  }
}
