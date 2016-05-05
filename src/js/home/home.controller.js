class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.test = "Volotopia is currently work in progress.  The site is modeled after a travel agency site, where a user can browse, and purchase airline flights. " +
        "The site stands as a means to publish my work within the MEAN stack (Mongo, Express.js, Angular.js, Node.js). Volotopia is not to be viewed as a professional site, as it has been " +
        "quickly designed and constructed for sharpening, and training my development skills. It will be refactored in near future to include custom directives, and usage of different techniches " +
        " of transitioning state b/w controllers, i.e. a state service and/or $emit and $broadcasts.  It should be " +
        "noted, the site exists mainly to show function, and I do not profess to be a designer.  That being said, it is desired, at completion, to have the application scaled to multiple screens, whether mobile or desktop, using bootstrap. ";

    this.signature = "-- Andrew A. Cisternino";

  }


}

export default HomeCtrl;
