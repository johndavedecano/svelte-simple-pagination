export default (active, numpages, limit) => {
  const items = []

  if (active > numpages) {
    return { hasNext: false, hasPrev: true, pages: items }
  }

  if (active < 1) {
    return { hasNext: true, hasPrev: false, pages: items }
  }

  if (numpages <= limit) {
    for (let i = 1; i <= numpages; i++) {
      items.push(i)
    }
    return { hasNext: false, hasPrev: false, pages: items }
  }

  let array = []

  for (let i = 1; i <= numpages; i++) {
    array.push(i)
    if (array.length === limit || i === numpages) {
      items.push(array)
      array = []
    }
  }

  let pages = []
  let hasPrev = false
  let hasNext = false

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const str = item[0]
    const end = item[item.length - 1]
    if (active >= str && active <= end) {
      pages = item
      hasPrev = !!items[i - 1]
      hasNext = i < items.length - 1
      break
    }
  }

  return { hasNext, hasPrev, pages }
}
