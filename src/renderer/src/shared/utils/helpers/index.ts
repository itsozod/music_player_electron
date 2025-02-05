export const parseTime = (time: number) => {
  time %= 3600
  let minutes = Math.floor(time / 60)
  let secs = Math.floor(time % 60)
  return [minutes, secs]
    .map((v) => (v < 10 ? '0' + v : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':')
}
