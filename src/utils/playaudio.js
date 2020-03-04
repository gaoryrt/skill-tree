window.playing = null
const is_10_3_3 = /10_3_3/.test(navigator.userAgent)
export default id => new Promise((resolve) => {
  const x = document.getElementById(id.replace(/\.(mp3|m4a)$/g, ''))
  if (is_10_3_3) {
    x.play()
    x.onended = () => resolve()
  } else {
    if (window.playing && window.playing !== x) {
      window.playing.pause()
      window.playing.currentTime = 0
    }
    x.play()
    window.playing = x
    x.onended = () => {
      window.playing = null
      resolve()
    }
  }
})
