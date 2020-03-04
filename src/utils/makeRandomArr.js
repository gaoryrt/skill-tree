export default (range) => {
  const rtn = [0]
  for (let i = 1; i < range; i += 1) {
    rtn.push(i)
  }
  for (let i = 0; i < range - 1; i += 1) {
    const idx = Math.floor(Math.random() * (range - i))
    const temp = rtn[idx]
    rtn[idx] = rtn[range - i - 1]
    rtn[range - i - 1] = temp
  }
  return rtn
}
