import { User } from './User';
import { Company } from './Company';

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
