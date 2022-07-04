import { User } from './User';
import { Company } from './Company';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(documentDivIdName: string) {
    let divToUse = document.getElementById(documentDivIdName);
    if (divToUse === null) {
      throw new Error(
        'CustomMap: Could not create map, the parent element div does not exist or the name is invalid...'
      );
    }
    this.googleMap = new google.maps.Map(divToUse, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // Define an interface and pass it here, invert the dependency
  // to any object that wants to be added as a marker
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
