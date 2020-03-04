const get = (src, fn) => {
  const xmlhr = new XMLHttpRequest()
  xmlhr.onreadystatechange = () => {
    if (xmlhr.readyState !== 4) return
    if (xmlhr.status === 200) {
      fn(JSON.parse(xmlhr.responseText))
    } else {
      throw new Error(xmlhr.responseText)
    }
  }
  xmlhr.open('GET', src, true)
  xmlhr.send(null)
  return xmlhr
}

export default ({ authAPI, share, jsApiList, then }) => {
  const shareDestIncludes = dest =>
    (share.destination || ['timeline', 'appmessage'])
      .map(i => i.toUpperCase())
      .indexOf(dest.toUpperCase()) === -1 ? false : true
  const regist = ({
    title, desc, link, imgUrl, success = () => {}, cancel = () => {}
  }) => () => {
    console.log('regist', share.destination)
    if (shareDestIncludes('Timeline')) {
      wx.onMenuShareTimeline({
        title, link, imgUrl, success, cancel
      })
      if (wx.updateTimelineShareData) wx.updateTimelineShareData({
        title, link, imgUrl, success
      })
    }
    if (shareDestIncludes('AppMessage')) {
      wx.updateAppMessageShareData({
        title, desc, link, imgUrl, success
      })
      if (wx.onMenuShareAppMessage) wx.onMenuShareAppMessage({
        title, desc, link, imgUrl, type: '', dataUrl: '', success, cancel
      })
    }
    const _conf = {
      title, desc, link, imgUrl, success, cancel
    }
    if (shareDestIncludes('QQ')) wx.onMenuShareQQ(_conf)
    if (shareDestIncludes('Weibo')) wx.onMenuShareWeibo(_conf)
    if (shareDestIncludes('QZone')) wx.onMenuShareQZone(_conf)
    if (then) then()
  }
  const config = jsApiList => data => {
    wx.config({
      debug: false,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: jsApiList || [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'startRecord',
        'stopRecord',
        'playVoice',
        'uploadVoice',
        'downloadVoice',
        'onVoicePlayEnd'
      ]
    })
    wx.ready(regist(share))
  }
  const rtn = get(authAPI + '?fromurl=' + encodeURIComponent(location.href.split('#')[0]), config(jsApiList))
  rtn.reRegist = share => regist(share)()
  return rtn
}