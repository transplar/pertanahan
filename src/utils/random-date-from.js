const randomDateFrom = function (start) {
  const now = new Date()
  const from = new Date(start)
  return new Date(from.getTime() + Math.random() * (now.getTime() - from.getTime()))
}

export default randomDateFrom
