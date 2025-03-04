const time = new Date()

export const greetings = [
  {
    greeting: 'Good morning',
    time: time.getHours() > 5 && time.getHours() <= 12
  },
  {
    greeting: 'Good afternoon',
    time: time.getHours() > 12 && time.getHours() <= 18
  },
  {
    greeting: 'Good evening',
    time: time.getHours() > 18 && time.getHours() <= 22
  },
  {
    greeting: 'Good night',
    time: time.getHours() > 22 || time.getHours() <= 5
  }
]
