import moment from 'moment'

export const formatTime = (time, isUTC = true) =>
  isUTC ? moment(time).format('HH:mm:ss') : moment.utc(time).format('HH:mm:ss')

export const getCurrentTime = () => new Date().getTime()
