angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("article/article.html","<div class=\"article-page\">\n\n  <!-- Banner for article title, action buttons -->\n  <div class=\"banner\">\n    <div class=\"container\">\n\n      <h1>Example article title</h1>\n\n      <div class=\"article-meta\">\n        <!-- Show author info + favorite & follow buttons -->\n        <div class=\"article-meta\">\n          <a href=\"\"><img /></a>\n          <div class=\"info\">\n            <a href=\"\" class=\"author\">Brad Green</a>\n            <span class=\"date\">January 20th</span>\n          </div>\n\n          <button class=\"btn btn-sm btn-outline-secondary\">\n            <i class=\"ion-plus-round\"></i>\n            &nbsp;\n            Follow Brad Green\n          </button>\n          &nbsp;\n          <button class=\"btn btn-sm btn-outline-primary\">\n            <i class=\"ion-heart\"></i>\n            &nbsp;\n            Favorite Article <span class=\"counter\">(29)</span>\n          </button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <!-- Main view. Contains article html and comments -->\n  <div class=\"container page\">\n\n    <!-- Article\'s HTML & tags rendered here -->\n    <div class=\"row article-content\">\n      <div class=\"col-xs-12\">\n\n        <div>\n          <p>This is the content of our article.</p>\n        </div>\n\n        <ul class=\"tag-list\">\n          <li class=\"tag-default tag-pill tag-outline\">\n            Tag One\n          </li>\n          <li class=\"tag-default tag-pill tag-outline\">\n            Tag Two\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"article-actions\">\n\n      <!-- Show author info + favorite & follow buttons -->\n      <div class=\"article-meta\">\n        <a href=\"\"><img /></a>\n        <div class=\"info\">\n          <a href=\"\" class=\"author\">Brad Green</a>\n          <span class=\"date\">January 20th</span>\n        </div>\n\n        <button class=\"btn btn-sm btn-outline-secondary\">\n          <i class=\"ion-plus-round\"></i>\n          &nbsp;\n          Follow Brad Green\n        </button>\n        &nbsp;\n        <button class=\"btn btn-sm btn-outline-primary\">\n          <i class=\"ion-heart\"></i>\n          &nbsp;\n          Favorite Article <span class=\"counter\">(29)</span>\n        </button>\n      </div>\n\n    </div>\n\n    <!-- Comments section -->\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n        <div>\n          <form class=\"card comment-form\">\n            <div class=\"card-block\">\n              <textarea class=\"form-control\"\n                placeholder=\"Write a comment...\"\n                rows=\"3\"></textarea>\n            </div>\n            <div class=\"card-footer\">\n              <img class=\"comment-author-img\" />\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n               Post Comment\n              </button>\n            </div>\n          </form>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block\">\n            <p class=\"card-text\">This is an example comment.</p>\n          </div>\n          <div class=\"card-footer\">\n            <a class=\"comment-author\" href=\"\">\n              <img class=\"comment-author-img\" />\n            </a>\n            &nbsp;\n            <a class=\"comment-author\" href=\"\">\n              BradGreen\n            </a>\n            <span class=\"date-posted\">\n              Jan 20, 2016\n            </span>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n\n\n\n</div>\n");
$templateCache.put("auth/login.html","\n        <div class=\"container\">\n        <div class=\"page-header text-center\">\n              <h1><span class=\"fa fa-sign-in\"></span> Login</h1>\n        </div>\n        <div ng-show=\"error\" class=\"alert alert-danger row\">\n          <span>{{ error.message }}</span>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-5 \">\n\n                <div class=\"well\" style=\"height: 250px;\">\n\n                    <form ng-submit=\"$ctrl.logIn()\">\n                        <div class=\"form-group\">\n                            <label>Username</label>\n                            <input type=\"text\" placeholder=\"Username\" required class=\"form-control\" ng-model=\"$ctrl.user.username\" name=\"username\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n                            <input type=\"password\" placeholder=\"Password\" required class=\"form-control\" ng-model=\"$ctrl.user.password\" name=\"password\">\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-warning btn-lg\">Login</button>\n                    </form>\n\n\n                </div>\n            </div>\n            <div class=\"col-sm-2 text\">\n              <table>\n              <tr style=\"height:50px\"><td><td></tr>\n              <tr style=\"height:100px; \"><td><i style=\"text-center; font-size: 125px;\" class=\"fa fa-arrows-h\"></i><td></tr>\n              <tr style=\"height:100px\"><td><td></tr>\n              </table>\n            </div>\n            <div class=\"col-sm-5 \">\n                    <a href=\"/auth/google\"><span class=\"fa fa-google-plus\" style=\"font-size: 225px; padding-left:10px; padding-right:10px; background-color:#d8e6f3;\"></span></a>\n            </div>\n            </div>\n            <hr>\n\n            <p class=\"text-center\">Need an account?<a href=\"/#/register\"> Register</a></p>\n        </div>\n");
$templateCache.put("auth/register.html","\n        <div class=\"container\">\n            <div class=\"page-header text-center\">\n                <h1><span class=\"glyphicon glyphicon-user\"></span> Register</h1>\n            </div>\n            <div ng-show=\"error\" class=\"alert alert-danger row\">\n              <span>{{ error.message }}</span>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-5 \">\n\n                    <div class=\"well\" style=\"height: 250px;\">\n\n                        <form ng-submit=\"$ctrl.register()\">\n                            <div class=\"form-group\">\n                                <label>Username</label>\n                                <input type=\"text\" placeholder=\"Username\" required class=\"form-control\" ng-model=\"$ctrl.user.username\" name=\"username\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input type=\"password\" placeholder=\"Password\" required class=\"form-control\" ng-model=\"$ctrl.user.password\" name=\"password\">\n                            </div>\n\n                            <button type=\"submit\" class=\"btn btn-warning btn-lg\">Register</button>\n                        </form>\n\n\n                    </div>\n                </div>\n                <div class=\"col-sm-2 text\">\n                  <table>\n                  <tr style=\"height:50px\"><td><td></tr>\n                  <tr style=\"height:100px; \"><td><i style=\"text-center; font-size: 125px;\" class=\"fa fa-arrows-h\"></i><td></tr>\n                  <tr style=\"height:100px\"><td><td></tr>\n                  </table>\n                </div>\n                <div class=\"col-sm-5 \">\n\n                        <a href=\"/auth/google\"><span class=\"fa fa-google-plus\" style=\"font-size: 225px; padding-left:10px; padding-right:10px; background-color:#d8e6f3;\"></span></a>\n\n\n                </div>\n            </div>\n            <hr>\n            <p class=\"text-center\">Already have an account? <a href=\"/#/login\">Login</a></p>\n\n\n        </div>\n");
$templateCache.put("home/home.html","\n   <div class=\"jumbotron text-center\" style=\"margin-top:50px; \">\n       <div ng-bind=\"::$ctrl.test\"></div>\n       <div style=\"float:right;margin-top:4px;\" ng-bind=\"::$ctrl.signature\"></div>\n   </div>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n\n<div class=\"container\">\n        <ui-view></ui-view>\n    </div>\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","\n\n  <div class=\"footer\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-sm-4\"></div>\n              <div class=\"col-sm-6  col-xs-6 center-block\" style=\"font-style: italic; padding-top: 10px;\">\n                  <div class=\"row\">\n                      <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName\"></a>\n                      <span> is an American company</span>\n                  </div>\n                  <div style=\"font-size:9.5px; padding-left:40px;\" class=\"row center-block\">\n                      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n                  </div>\n              </div>\n              <div class=\"col-sm-2  col-xs-4 \" style=\"font-size: 9.5px;\">\n                  <h7>Contact Us</h7>\n                  <ul class=\"list-unstyled\">\n                      <li><i class=\"glyphicon glyphicon-globe\"></i> Fairfax, VA</li>\n                      <li><i class=\"glyphicon glyphicon-phone\"></i> 555.555.5555</li>\n                      <li><i class=\"glyphicon glyphicon-envelope\"></i> <a href=\"mailto:info@volotopia.com\">info@volotopia.com</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n</div>\n");
$templateCache.put("layout/header.html","\n<div class=\"navbar navbar-static-top\">\n\n        <div class=\'container\' role=\"navigation\">\n          <div class=\'navbar-header\'>\n              <a ui-sref=\"app.home\" class=\"navbar-brand\" ng-bind=\"::$ctrl.appName\"></a>\n          </div>\n          <ul class=\"nav navbar-nav\">\n              <li ng-class=\"{ active: activeLink(\'app.routes\')}\"><a ui-sref=\"app.routes\" >Book a Flight</a></li>\n              <li ng-class=\"{ active: activeLink(\'app.home\')}\"><a ui-sref=\"app.myFlights\">My Flights</a></li>\n              <li>\n                  <a href ng-click=\"$ctrl.getAirlines()\" data-toggle=\"dropdown\" ng-class=\"{\'dropdown-toggle\': airlines}\">Airlines<span class=\"caret\"></span></a>\n\n                  <ul class=\"dropdown-menu\" ng-if=\"$ctrl.airlines\">\n                      <li ng-repeat=\"airline in $ctrl.airlines | orderBy: \'title\'\">\n                          <a href=\"/#/airlines/{{airline._id}}\">{{airline.title}}</a>\n                      </li>\n                  </ul>\n              </li>\n\n\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li ng-show=\"$ctrl.isLoggedIn()\"><a href=\"\" ng-bind=\"$ctrl.currentUser()\"></a></li>\n              <li ng-show=\"$ctrl.isLoggedIn()\"><a href=\"\" ng-click=\"$ctrl.logOut()\">Log Out</a></li>\n              <li ng-hide=\"$ctrl.isLoggedIn()\"><a ui-sref=\"app.register\"><span class=\"glyphicon glyphicon-user\"></span> Register</a></li>\n              <li class=\'divider\'></li>\n              <li ng-hide=\"$ctrl.isLoggedIn()\"><a ui-sref=\'app.login\'><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n              <li class=\'divider\'></li>\n              <li ng-hide=\"$ctrl.isLoggedIn()\"><a href=\"app.google\"><span class=\"fa fa-google-plus\"></span> Google</a></li>\n          </ul>\n        </div>\n\n    </div>\n");
$templateCache.put("myFlights/myFlights.html","\n    <div class=\"page-header text-center\" ng-hide=\"$ctrl.isLoggedIn()\">\n                <h2>Please log in.</h2>\n\n        </div>\n        <div style=\"margin-top:15px;\" ng-if=\"$ctrl.isLoggedIn()\" ng-repeat=\"flight in $ctrl.user.flights | orderBy: \'departureDateTime\'\">\n\n            <div class=\"container\">\n                <div class=\"row\">\n\n                    <div class=\"col-sm-1\" style=\"margin-top: 5px; margin-left: 10px;\">\n                        <span><button type=\"button\" ng-click=\"$ctrl.deleteFlight(flight)\" class=\"btn btn-danger\">Delete</button>\n\n                  </div>\n                  <div class=\"col-sm-2\" style=\"margin-top:2px\">\n                    <div  >\n                      <span style=\"font-size:16px; font-weight:600; margin-left:10px; color:navy;\" ng-bind=\'flight.price\'>\n\n                      </span>\n                    </div>\n                    <div style=\"margin-top:3px;\">\n                        <span style=\"font-size:15px; margin-left:10px;  color: rgba(0, 0, 0, 0.5);\" ng-bind=\'flight.airline\'>\n\n                                  </span>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-8\">\n                    <div>\n                        <span style=\"font-size:15px; \" ng-bind=\"flight.departureDateTime\"></span><span style=\"left-margin:15px; font-weight: 800;color:navy;\" ng-bind=\'flight.departureAirport\'> </span>\n\n                        <span style=\"margin-left:5px\"><i class=\"fa fa-long-arrow-right\"></i></span>\n                    </div>\n                    <div>\n                        <span style=\"font-size:15px;\" ng-bind=\'flight.arrivalDateTime\'>  </span><span style=\"left-margin:15px;font-weight: 800; color:navy;\" ng-bind=\'flight.airrivalAirport\'></span>\n                    </div>\n                    <div>\n                        <span style=\"font-size:15px;\" ng-bind =\'flight.duration\'></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </div>\n");
$templateCache.put("routes/routes.html","\n\n  <div class=\'container\'>\n  <toaster-container toaster-options=\"{\'time-out\': 3000, \'position-class\': \'toast-top-center\',\'close-button\':true}\"></toaster-container>\n      <div class=\"col-sm-2\" style=\"height:80%; background-color: whitesmoke;\">\n\n      </div>\n      <div class=\"col-sm-10\">\n          <div class=\"row\" style=\"margin-top:15px\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"form-group\" class=\"col-sm-11\">\n\n              </div>\n          </div>\n\n          <div class=\"row\">\n\n              <div class=\"col-sm-11\" style=\"height: 70%; margin-top:10px; overflow-y: scroll;\">\n\n             <div ng-if=\"error\" class=\"alert alert-danger row page-header text-center\">\n                <span>{{ error.message }}</span>\n              </div>\n                  <div ng-show=\"$ctrl.isSearchResultsVisible()\" ng-repeat=\"route in $ctrl._routes  | orderBy: \'departureDateTime\'\">\n                      <div class=\"row\" style=\" padding-top: 10px; padding-bottom: 10px;\">\n                          <div class=\"col-sm-1\">\n                          </div>\n                          <div class=\"col-sm-2\" style=\"margin-top:5px; \">\n                              <div><span style=\"font-size:16px; font-weight:600; margin-left:10px; color:navy;\">\n          {{route.price | currency}}\n        </span>\n                              </div>\n                              <div style=\"margin-top: 10px; margin-left: 10px;\">\n                                  <span><button type=\"button\" ng-click=\"$ctrl.bookFlight(route)\" ng-show=\"$ctrl.isLoggedIn()\" style=\"background-color:#b73338; border:#b73338; color: white;\" class=\"btn\">Book</button>\n          <span style=\"font-size:12px; color:#6495ED;\" ng-hide=\"$ctrl.isLoggedIn()\">Login to book</span>\n                              </div>\n                          </div>\n                          <div class=\"col-sm-2\" style=\"margin-top:15px; \">\n                              <span style=\"font-size:15px; float:left; color: rgba(0, 0, 0, 0.5);\">{{route.airline.title}}</span>\n                          </div>\n                          <div class=\"col-sm-7\" style=\"margin-top:5px;\">\n                              <div>\n                                  <span style=\"font-size:15px; \">{{route.departureDateTime }} (EST) </span><span style=\"font-weight: 800;color:navy;\">{{route.departureAirport.code}} </span>\n\n                                  <span style=\"margin-left:5px\"><i class=\"fa fa-long-arrow-right\"></i></span>\n                              </div>\n                              <div>\n                                  <span style=\"font-size:15px;\">{{route.arrivalDateTime}} (EST) </span><span style=\"font-weight: 800; color:navy;\">{{route.arrivalAirport.code}}</span>\n                              </div>\n                              <div style=\"font-size:15px;\">\n                                  <span>duration: ~{{route.duration}} </span>\n                                  <span>| available: {{route.capacity - route.occupied}} </span>\n                                  <span>| capacity: {{route.capacity}}</span>\n\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-sm-1\">\n          </div>\n\n      </div>\n");
$templateCache.put("airlines/airlines.html","\n    <div ng-repeat=\"airline in airlines | orderBy: \'title\'\">\n\n        <span class=\"glyphicon glyphicon-star\" ng-click=\"incrementRatings(airline)\">\n\n    </span>\n        <span> {{airline.ratings}} </span>\n        <span><a  ng-href=\"{{airline.link}}\">\n        {{airline.title}}\n    </a>\n    </span>\n        <span>\n        <a href=\"#/airlines/{{airline._id}}\">Comments ({{getCommentsCount(airline)}})</a>\n\n    </span>\n        <span>\n        <a href=\"#/airlines/{{airline._id}}\">Routes ({{getRtouesCount(airline)}})</a>\n\n    </span>\n\n    </div>\n");
$templateCache.put("airline/airline.html","\n    <h3>\n\n<span><a  ng-href=\"{{airline.link}}\">\n{{airline.title}}\n</a>\n</span>\n<span style= \"padding-left:12px\" class=\"glyphicon glyphicon-thumbs-up\"\n  ng-click=\"incrementRatings(airline)\">\n\n</span>\n\n<span > ({{airline.ratings}}) </span>\n</h3>\n\n    <ul id=\"airlineNav\" class=\"nav nav-tabs\">\n        <li ng-class=\"{ active: activeLink(\'airline.routes\')}\"><a ui-sref=\".routes\">Routes</a></li>\n        <li ng-class=\"{ active: activeLink(\'airline.comments\')}\"><a ui-sref=\".comments\">Comments</a></li>\n    </ul>\n\n    <div ui-view></div>\n");}]);