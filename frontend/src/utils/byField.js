const byField = (field) => {
  return (a, b) => (a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1)
}

export default byField
