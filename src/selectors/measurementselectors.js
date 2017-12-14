export function measurementsFormattedForDropdown(measurements) {
    return measurements.map(measurement => {
      return {
        value: measurement.id,
        text :measurement.id
      };
    });
  }
  