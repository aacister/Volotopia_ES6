class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.test = "Volotopia is currently work in progress.  The site is modeled after a travel agency site, where a user can browse, and purchase airline flights. " +
        "The site stands as a means to publish my work within the MEAN stack (Mongo, Express.js, Angular.js, Node.js). Volotopia is not to be viewed as a professional site, as it has been " +
        "quickly designed and constructed for sharpening, and training my development skills. ";

    this.signature = "-- Andrew A. Cisternino";

  }


}

export default HomeCtrl;
