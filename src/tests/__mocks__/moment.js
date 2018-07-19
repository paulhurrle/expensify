// import moment from 'moment';
const moment = require.requireActual('moment'); // mocks out the moment library, as found in moment docs

export default (timestamp = 0) => {
  return moment(timestamp);
};