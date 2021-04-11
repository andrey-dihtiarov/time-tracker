/**
 * format time function returns
 * time string in hh:mm:ss format
 * @param time
 * @returns {string}
 */
export const formatTime = (time) => {
  const splittedTimeString = new Date(time).toISOString().split('T')[1]
  return splittedTimeString.split('.')[0]
}

/**
 * getCurrentTime function returns
 * current time in milliseconds
 * @returns {number}
 */
export const getCurrentTime = () => new Date().getTime()

// export const generateUniqueKey = (name) => `${name}${getCurrentTime()}`
