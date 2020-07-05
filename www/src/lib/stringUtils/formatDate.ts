import moment from 'moment';

export default (str): string => {
  return moment().format('DD MMMM YYYY');
};
