export class EncodingTools {
  static encode(x: any) {
    return "fake-jwt-token";
    // return btoa(JSON.stringify(x));
  }
  static decode(x: any) {
    return JSON.parse(atob(x));
  }
}
