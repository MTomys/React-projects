export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(documentDivIdName: string) {
    let divToUse = document.getElementById(documentDivIdName);
    if (divToUse === null) {
      throw new Error(
        'CustomMap: Could not create map, this div does not exist or the name is invalid...'
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
}
