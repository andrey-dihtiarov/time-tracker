import moment from 'moment'

/**
 * format time function returns
 * time string in hh:mm:ss format
 * @param time
 * @param isUTC
 * @returns {string}
 */
export const formatTime = (time, isUTC = true) =>
  isUTC ? moment(time).format('HH:mm:ss') : moment.utc(time).format('HH:mm:ss')

/**
 * getCurrentTime function returns
 * current time in milliseconds
 * @returns {number}
 */
export const getCurrentTime = () => new Date().getTime()

// export const generateUniqueKey = (name) => `${name}${getCurrentTime()}`
