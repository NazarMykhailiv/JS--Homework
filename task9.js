const padIt = (str, n) => {
  var results = str
  var i = 0

  while (i < n) {
    if (i % 2 === 0) {
      results = `*${results}`
    } else {
      results = `${results}*`
    }

    i += 1
  }

  return results
}
