const sortItems = (items, value) => {
  let arr = []

  switch (value) {
    case "danger":
      items.forEach((element) => {
        if (arr.includes(element[value])) {
          return
        }
        arr.push(element[value])
      })

      arr.sort((a, b) => {
        return Number(a.split(" ")[2]) > Number(b.split(" ")[2]) ? 1 : -1
      })
      break

    case "name":
      items.forEach((element) => {
        if (arr.includes(element[value][0].toUpperCase())) {
          return
        }
        arr.push(element[value][0].toUpperCase())
      })

      arr.sort((a, b) => {
        return a > b ? 1 : -1
      })
      break

    case "level":
      items.forEach((element) => {
        if (arr.includes(element[value])) {
          return
        }
        arr.push(element[value])
      })

      arr.sort((a, b) => {
        return a > b ? 1 : -1
      })
      break

    default:
      console.error("Unexpected result of sortItems.js")
      break
  }

  return arr
}

export default sortItems
