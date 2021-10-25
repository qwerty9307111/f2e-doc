function throttle (fn, delay = 3000) {
  let timer
  return function () {
    const args = arguments
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      console.log(this)
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

setInterval(
  throttle((a) => {console.log('a = '+ a)}), 1000);
