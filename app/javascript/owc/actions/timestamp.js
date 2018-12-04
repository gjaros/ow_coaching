export const changeTime = (newTime) => ({
  type: 'CHANGE_TIME',
  newTime
})

export const seekToTimestamp = (newTime) => ({
  type: 'SEEK_TO_TIMESTAMP',
  newTime
})
