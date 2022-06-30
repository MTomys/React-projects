import { User } from './User';
import { Company } from './Company';
/// <reference types="@types/google.maps" />

let map = document.getElementById('map');

if (map !== null) {
  new google.maps.Map(map, {
    zoom: 1,
    center: {
      lng: 0,
      lat: 0,
    },
  });
}
