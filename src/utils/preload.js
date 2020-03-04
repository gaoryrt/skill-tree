let running = 0
let count = 0
let waiting = []
let fn

const input = argArr => {
  count += argArr.length
  argArr.forEach(i => waiting.push(i))
}

const inputSetAndRun = (argArr, promiseFn, limitNum, completeFn) => {
  input(argArr)
  fn = () => {
    const arg = waiting.shift()
    const iter = () => {
      if (--count < limitNum) running -= 1
      if (count > 0) fn()
      else if (completeFn) completeFn()
    }
    if (arg) {
      return promiseFn(arg)
        .then(iter)
        .catch(iter)
    }
  }
  for (; running < limitNum; running += 1) fn()
}

const isObj = any => Object.prototype.toString.call(any) === '[object Object]'
const isArr = any => Object.prototype.toString.call(any) === '[object Array]'
const isStr = any => Object.prototype.toString.call(any) === '[object String]'

const _load = srcStr => new Promise((resolve, reject) => {
  const isAdo = /\.(mp3|m4a)$/.test(srcStr)
  const obj = isAdo ? new Audio(srcStr) : new Image()
  if (isAdo) {
    obj.setAttribute('preload', 'auto')
    const id = srcStr.match(/([^/]*)\.(mp3|m4a)$/)
    if (!id.length || document.getElementById(id[1])) return resolve()
    obj.setAttribute('id', id[1])
    obj.currentTime = 0.001
    obj.addEventListener('canplay', resolve)
    document.body.appendChild(obj)
  } else {
    if (window[srcStr] !== undefined) return resolve()
    obj.addEventListener('load', resolve)
    window[srcStr] = obj
    obj.src = srcStr
  }
  setTimeout(() => reject(new Error()), 700)
  obj.addEventListener('error', reject)
})

const preload = any => {
  let allArr = []
  let completeFn
  if (isStr(any)) allArr.push(any)
  else if (isArr(any)) {
    allArr = any
  } else if (isObj(any)) {
    const { src, srcArr, complete } = any
    completeFn = complete
    if (srcArr) allArr = srcArr
    if (src) allArr.push(src)
  }
  inputSetAndRun(allArr, _load, 3, completeFn)
}

export {
  preload
}
