class AirlinesCtrl {
  constructor(Airline,  airlinesResolved ) {
    'ngInject';

    this._Airline = Airline;
    this._airlines = airlinesResolved.data;

  }

  incrementRatings(airline) {
      this._Airline.incrementRatings(airline);
  }

  getCommentsCount(airline) {
      this._Airline.getCommentsCount(airline);
  }

}

export default AirlinesCtrl;
