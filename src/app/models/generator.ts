export interface AllGenerators {
  capacity: '';
  generators: [
    {
      genSr: '';
      bookings: [
        id: 0,
        eventName: '',
        genSr: '',
        instalationType: '',
        jobNumber: '',
        location: '',
        mainClient: '',
        numberOfDaysToHire: 0,
        projectNumber: '',
        siteInfo: '',
        subClient: '',
        startDate: '',
        endDate: ''
      ];
    }
  ];
}

export interface AvailableGenerators {
  id: 0;
  genCapacity: '';
  genSrNumber: '';
}
