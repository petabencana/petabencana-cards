import {noView, inject} from 'aurelia-framework';
import {Config} from 'resources/config';

//start-aurelia-decorators
@noView
@inject(Config)
//end-aurelia-decorators
export class Utility {
  constructor(Config) {
    this.config = Config;
    this.region_bounds = {};
    for (let city in Config.map.instance_regions) {
      this.region_bounds[city] = Config.map.instance_regions[city].bounds;
    }
  }

  setCardData(router) {
    return new Promise(function(resolve, reject) {
      var count;
      for (let i in router.routes) {
        if (router.routes[i].name === router.currentInstruction.fragment) {
          count = i;
        }
      }
      resolve({
        total: router.routes.length - 2,
        count: parseInt(count)
      });
    });
  }

  resizeCardHt(factor) {
    var glitchHeight = 106;
    $('.card_content_wrapper').css({
      'height': $(document).height() - ($('.card_title_wrapper').height() + $('.card_navigation_wrapper').height() + (factor * glitchHeight)) + 'px'
    });
    $('.card_navigation_wrapper').css({
      'bottom': (factor * glitchHeight) + 'px'
    });
  }

  checkBrowserThenResize() {
    $('.tabButtons').width((100 / this.total_cards) + '%'); //fit 'n' tab buttons on-the-fly, n = (total - staple) cards
    var nua = navigator.userAgent.toLowerCase();
    //______________is Mobile______________________an iPhone_________________browser not safari (in-app)___________app is twitter________________app is facebook______________not facebook messenger_________
    if ((/Mobi/.test(navigator.userAgent)) && nua.indexOf('iphone') > -1 && nua.indexOf('safari') === -1 && (nua.indexOf('twitter') > -1 || (nua.indexOf('fban') > -1 && nua.indexOf('messenger') === -1))) {
      this.resizeCardHt(1);
    } else {
      //Execute resize on initial page load
      this.resizeCardHt(0);
    }
  }

  disableNext(router, reportcard) {
    if (router.currentInstruction.fragment === 'location') {
      return !reportcard.location.markerLocation;
    } else if (router.currentInstruction.fragment === 'prep') {
      return !reportcard.reportType;
    } else if (router.currentInstruction.fragment === 'depth') {
      return !this.sliderDragged; //TODO: Disable next button on depth card until user drags slider
    } else {
      return this.utility.card_count >= this.utility.total_cards - 1; //Disable next button on review card (exclude staple card routes: terms, thanks, error)
    }
  }

  isLocationSupported(reportcard) {
    var self = this,
        l = reportcard.location.markerLocation;
    reportcard.location.supported = false;
    for (let city in self.region_bounds) {
      if (l.lat > self.region_bounds[city].sw[0] && l.lng > self.region_bounds[city].sw[1] && l.lat < self.region_bounds[city].ne[0] && l.lng < self.region_bounds[city].ne[1]) {
        reportcard.location.supported = true;
        break;
      }
    }
    return reportcard.location.supported;
  }

  navigate(order, router, reportcard) {
    var self = this;
    if (order === 'next') {
      if (router.currentInstruction.fragment === 'location') {
        if (self.isLocationSupported(reportcard) || self.location_check) {
          self.card_count += 1;
          router.navigate(router.routes[self.card_count].route);
          //TODO: self.closeNotification();
        }
        if (!self.location_check && !self.isLocationSupported(reportcard)) {
          //TODO: self.showNotification('warning', 'location_2', 'location_2', false);
          self.location_check = true; // execute once
        }
      } else if (router.currentInstruction.fragment !== 'location' && self.card_count < self.total_cards) {
        self.card_count += 1;
        router.navigate(router.routes[self.card_count].route);
        //TODO: self.closeNotification();
      }
    } else if (order === 'prev') {
      if (self.card_count > 1) {
        self.card_count -= 1;
        router.navigate(router.routes[self.card_count].route);
      }
    }
  }
}
