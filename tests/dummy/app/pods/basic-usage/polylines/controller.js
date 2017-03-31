import Controller from 'ember-controller';
import {A} from 'ember-array/utils';
import set from 'ember-metal/set';
import {assign} from 'ember-platform';

import GoogleMapConstants from '../../../mixins/google-map-constants';

export default Controller.extend(GoogleMapConstants, {
  /**
   * Whether to use the instance `options` or top-level properties as configuration
   * @type {Boolean}
   */
  useOptions: false,

  mapDefaults: {
    lat: 30.2672,
    lng: -97.74310000000003,
    zoom: 5
  },

  polylineDefaults: {
    path: A([
      {lat: 31.255074185421936, lng: -97.71240234375},
      {lat: 30.38709188778112, lng: -96.78955078125},
      {lat: 29.396533739128397, lng: -97.75634765625},
      {lat: 30.349176094149833, lng: -98.50341796875}
    ]),
    clickable: true,
    draggable: true,
    editable: true,
    icons: A(),
    strokeColor: '#03a9f4',
    strokeOpacity: 1,
    strokePosition: 'INSIDE',
    strokeWeight: 3,
    visible: true,
    zIndex: 10
  },

  init() {
    this._super(...arguments);

    set(this, 'lat', this.mapDefaults.lat);
    set(this, 'lng', this.mapDefaults.lng);
    set(this, 'zoom', this.mapDefaults.zoom);
    set(this, 'options', assign({}, this.polylineDefaults));
  }
});
