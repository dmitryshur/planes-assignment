const KNOTS_KMH_RATIO = 1.852;
const FEET_METERS_RATIO = 0.3048;
const DOMODEDOVO_LAT = 55.410307;
const DOMODEDOVO_LON = 37.902451;

const toKmh = knots => Math.floor(knots * KNOTS_KMH_RATIO);
const toMeters = feet => Math.floor(feet * FEET_METERS_RATIO);

// calculate the distance using the haversine formula. the result is returned in km
const getDistance = (lat1, lat2, lon1, lon2) => {
  // earth radius in km
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return Number(d.toFixed(3));
};

const sortByDistance = (data) => {
  const planesData = data.slice();

  return planesData.sort((a, b) => a.distance - b.distance);
};

const getPlanesData = async function _getPlanesData() {
  const planesJSON = await fetch('/data').then(response => response.json());
  let planesData = [];

  // construct a custom array of object with the needed data
  for (const [, data] of Object.entries(planesJSON).slice(2)) {
    const dataObj = {
      coordinates: [data[1], data[2]],
      speed: toKmh(data[5]),
      track: data[3],
      altitude: toMeters(data[4]),
      airports: [data[11], data[12]],
      flight: data[16],
      distance: getDistance(data[1], DOMODEDOVO_LAT, data[2], DOMODEDOVO_LON),
    };

    planesData = planesData.concat(dataObj);
  }

  return sortByDistance(planesData);
};

export default getPlanesData;
