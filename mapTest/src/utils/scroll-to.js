Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2
    if (t < 1) {
      return c / 2 * t * t + b
    }
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }
  
  // requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
  var requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }
  })()
  
  /**
   * 检测到滚动元素，只要移动它们就行了
   * @param {number} amount
   */
  function move(amount) {
    document.documentElement.scrollTop = amount
    document.body.parentNode.scrollTop = amount
    document.body.scrollTop = amount
  }
  
  function position() {
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
  }
  
  /**
   * @param {number} to
   * @param {number} duration
   * @param {Function} callback
   */
  export function scrollTo(to, duration, callback) {
    const start = position()
    const change = to - start
    const increment = 20
    let currentTime = 0
    duration = (typeof (duration) === 'undefined') ? 500 : duration
    var animateScroll = function() {
      // 增加时间
      currentTime += increment
      // 用二次输入输出函数求值
      var val = Math.easeInOutQuad(currentTime, start, change, duration)
      // 执行滚动行为
      move(val)
      // 执行动画，直到滚动行为结束
      if (currentTime < duration) {
        requestAnimFrame(animateScroll)
      } else {
        if (callback && typeof (callback) === 'function') {
          // 动画结束后的回调函数
          callback()
        }
      }
    }
    animateScroll()
  }
  