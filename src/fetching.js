const KNOTS_KMH_RATIO = 1.852;
const FEET_METERS_RATIO = 0.3048;

const toKmh = knots => Math.floor(knots * KNOTS_KMH_RATIO);
const toMeters = feet => Math.floor(feet * FEET_METERS_RATIO);

const getPlanesData = async function _getPlanesData() {
  const planesJSON = await fetch('/data').then(response => response.json());
  let planesData = [];

  for (const [, data] of Object.entries(planesJSON).slice(2)) {
    const dataObj = {
      coordinates: [data[1], data[2]],
      speed: toKmh(data[5]),
      track: data[3],
      altitude: toMeters(data[4]),
      airports: [data[11], data[12]],
      flight: data[16],
      distance: 100,
    };

    planesData = planesData.concat(dataObj);
  }
};

export { getPlanesData };
