import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const measurements = [
  { id: '1' },{ id: '2'  }, {id: '3'} ,{id:'4'}
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (measurement) => {
  return measurement.id;
};

class MeasurementApi {
  static getAllMeasurements() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], measurements));
      }, delay);
    });
  }

  static saveMeasurement(measurement) {
    // clone to avoid mutating reference passed in.
    measurement = Object.assign({}, measurement);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
       

        if (measurement.id) {
          const existingMeasurementIndex = measurements.findIndex(a => a.id == measurement.id);
          measurements.splice(existingMeasurementIndex, 1, measurement);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          measurement.id = generateId(measurement);
          measurements.push(measurement);
        }

        // Just return here, since cloning at the beginning of the function instead.
        resolve(measurement);
      }, delay);
    });
  }

  static deleteMeasurement(measurementId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Bug fix for issue #6 - Now returns since return is implied on arrow funcs without braces.
        const indexOfMeasurementToDelete = measurements.findIndex(measurement => measurement.id == measurementId );
        measurements.splice(indexOfMeasurementToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default MeasurementApi;
