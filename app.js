const preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {
  preloader.style.opacity = '0'
  setTimeout(() => {
    preloader.style.display = 'none'
  }, 350)
  document.body.style.overflow = 'auto'
})

window.addEventListener('beforeunload', () => {
  header2.style.display = 'none'
  document.body.style.opacity = '0'
  window.scrollTo(0, 0)
})

//Journalist Name Break in 2 Lines
const journalistName = document.querySelectorAll('.journalistName')
const elm = document.createElement('br')
journalistName.forEach(journalist => {
  const name = journalist.textContent.split(' ', 2)
  const firstname = document.createElement('div')
  const lastname = document.createElement('div')
  firstname.textContent = name[0]
  lastname.textContent = name[1]
  lastname.classList.add('phrase')

  const underlineCont = document.createElement('div')
  underlineCont.classList.add('underlineCont')

  const underline = document.createElement('div')
  underline.classList.add('underline')

  underlineCont.appendChild(underline)
  underlineCont.appendChild(lastname)

  journalist.textContent = ''
  journalist.appendChild(firstname)
  journalist.appendChild(underlineCont)
})

//Menu Scroll Desktop 1
const section1 = document.querySelector('.section1')
const header2 = document.querySelector('.header2')

window.addEventListener('scroll', () => {
  if (section1.clientHeight - section1.clientHeight * 0.2 < window.scrollY) {
    header2.style.top = '0'
  } else {
    header2.style.top = '-120px'
  }
})

function smoothScroll(target, duration) {
  let flag = false
  let flag2 = false
  if (target == '#footer' || target == '#section3') flag = true
  if (target == '#section3' && window.innerWidth > 1200) flag2 = true
  var target = document.querySelector(target)
  var targetPosition = target.getBoundingClientRect().top
  var startPosition = window.pageYOffset
  if (flag) {
    if (flag2) {
      var distance = targetPosition - 140
    } else {
      var distance = targetPosition - 80
    }
  } else {
    var distance = targetPosition - 0
  }
  var startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    var timeElapsed = currentTime - startTime
    var run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d
    t--
    return -c * (t * t * t * t - 1) + b
  }

  requestAnimationFrame(animation)
}

//Menu Scroll Desktop 2
const desktopStaticMenu1 = document.querySelector('.desktop-static-menu1'),
  desktopStaticMenu2 = document.querySelector('.desktop-static-menu2'),
  desktopStaticMenu3 = document.querySelector('.desktop-static-menu3'),
  desktopStaticMenu4 = document.querySelector('.desktop-static-menu4')

desktopStaticMenu1.addEventListener('click', () => {
  smoothScroll('#section1', 1500)
})

desktopStaticMenu2.addEventListener('click', () => {
  smoothScroll('#section2', 1500)
})

desktopStaticMenu3.addEventListener('click', () => {
  smoothScroll('#section3', 1500)
})

desktopStaticMenu4.addEventListener('click', () => {
  smoothScroll('#footer', 1500)
})

const desktopfixedMenu1 = document.querySelectorAll('.desktop-menu-fixed1'),
  desktopfixedMenu2 = document.querySelectorAll('.desktop-menu-fixed2'),
  desktopfixedMenu3 = document.querySelectorAll('.desktop-menu-fixed3'),
  desktopfixedMenu4 = document.querySelectorAll('.desktop-menu-fixed4')

desktopfixedMenu1.forEach(elm => {
  elm.addEventListener('click', () => {
    smoothScroll2('#section1', 1500)
  })
})

desktopfixedMenu2.forEach(elm => {
  elm.addEventListener('click', () => {
    smoothScroll2('#section2', 1500)
  })
})

desktopfixedMenu3.forEach(elm => {
  elm.addEventListener('click', () => {
    smoothScroll2('#section3', 1500)
  })
})

desktopfixedMenu4.forEach(elm => {
  elm.addEventListener('click', () => {
    smoothScroll2('#footer', 1500)
  })
})

function smoothScroll2(target, duration) {
  let flag = false
  let flag2 = false
  if (target == '#footer' || target == '#section3') flag = true
  if (target == '#section3' && window.innerWidth > 1200) flag2 = true
  var target = document.querySelector(target)
  var targetPosition = target.getBoundingClientRect().top

  var startPosition = window.pageYOffset
  if (flag) {
    if (flag2) {
      var distance = targetPosition - 140
    } else {
      var distance = targetPosition - 80
    }
  } else {
    var distance = targetPosition - 0
  }

  var startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    var timeElapsed = currentTime - startTime
    var run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d
    t--
    return -c * (t * t * t * t - 1) + b
  }

  requestAnimationFrame(animation)
  if (open) closeMobileMenu()
}

// Open Issuu
const close = document.querySelector('.close')
const previewPeriodiko = document.querySelector('.previewPeriodiko')
const tefhos = document.querySelector('.tefhos')

tefhos.addEventListener('click', () => {
  previewPeriodiko.style.display = 'block'
  setTimeout(() => {
    previewPeriodiko.style.opacity = 1
  }, 100)
})

close.addEventListener('click', () => {
  previewPeriodiko.style.opacity = 0
  setTimeout(() => {
    previewPeriodiko.style.display = 'none'
  }, 400)
})

//Open/Close mobile menu
const mobileburgerMenu = document.querySelectorAll('.burgerMenu')
const bars = document.querySelectorAll('.burgerMenu div')
const mobileMenu = document.querySelector('.mobileMenuCont')
let open = false

mobileburgerMenu.forEach(menu => {
  menu.addEventListener('click', () => {
    if (!open) {
      document.body.style.overflow = 'hidden'
      mobileMenu.style.top = window.scrollY + 'px'
      mobileMenu.style.display = 'grid'

      bars[0].style.opacity = '0'
      bars[1].classList.remove('bar2hover')
      bars[2].style.opacity = '0'
      setTimeout(() => {
        mobileMenu.style.opacity = '1'
      }, 100)
      open = true
    } else {
      closeMobileMenu()
    }
  })
})

function closeMobileMenu() {
  document.body.style.overflow = 'auto'
  mobileMenu.style.opacity = '0'
  bars[0].style.opacity = '1'
  bars[1].classList.add('bar2hover')
  bars[2].style.opacity = '1'
  setTimeout(() => {
    mobileMenu.style.display = 'none'
  }, 400)
  open = false
}

window.addEventListener('resize', () => {
  if (open) {
    closeMobileMenu()
  }
})

//Close menu clicking on the overlay
const mobileMenuCont = document.querySelector('.mobileMenuCont')

mobileMenuCont.addEventListener('click', e => {
  if (e.target.matches('.mobileMenuCont')) closeMobileMenu()
})

//Hero img alternation
const hero2 = document.querySelectorAll('.hero img')[1]
let heroFlag = false

setTimeout(() => {
  hero2.style.opacity = '1'
  heroFlag = true
}, 2000)

setInterval(() => {
  if (!heroFlag) {
    hero2.style.opacity = '1'
    heroFlag = true
  } else {
    hero2.style.opacity = '0'
    heroFlag = false
  }
}, 6000)

// Slider Journalist
const slider = section3
const journalists = slider.querySelector('.journalists')
const journalistCont = journalists.querySelector('.journalistsCont')

let pressed = false,
  startX,
  x

let windowSize = window.innerWidth
window.addEventListener('resize', () => {
  windowSize = window.innerWidth
  journalists.style.left = '0px'
  windowSize > 1670 ? (slider.style.cursor = 'auto') : null
})

slider.addEventListener('mousedown', e => {
  windowSize < 1670 ? (pressed = true) : null
  startX = e.offsetX - journalists.offsetLeft
})

slider.addEventListener('touchstart', e => {
  windowSize < 1670 ? (pressed = true) : null
  startX = e.targetTouches[0].pageX - journalists.offsetLeft
})

slider.addEventListener('mouseenter', () => {
  if (windowSize < 1670) {
    slider.style.cursor = 'grab'
  }
})

slider.addEventListener('mouseup', () => {
  if (windowSize < 1670) {
    slider.style.cursor = 'grab'
  }
})

window.addEventListener('mouseup', () => {
  pressed = false
})

window.addEventListener('touchend', () => {
  pressed = false
})

slider.addEventListener('mousemove', e => {
  if (
    e.clientY > slider.getBoundingClientRect().top &&
    e.clientY < journalistCont.getBoundingClientRect().top
  ) {
    slider.style.cursor = 'auto'
  } else {
    slider.style.cursor = 'grab'
  }
  if (!pressed) return
  e.preventDefault()
  x = e.offsetX
  journalists.style.left = `${x - startX}px`
  checkBoundary()
})

slider.addEventListener('touchmove', e => {
  if (e.touches[0].clientY < journalistCont.getBoundingClientRect().top + 230)
    return
  if (e.touches[0].clientY > journalistCont.getBoundingClientRect().bottom - 50)
    return
  if (!pressed) return
  e.preventDefault()
  x = e.targetTouches[0].pageX
  journalists.style.left = `${x - startX}px`
  checkBoundary()
})

function checkBoundary() {
  let outer = slider.getBoundingClientRect()
  let inner = journalists.getBoundingClientRect()

  if (parseInt(journalists.style.left) > 0) {
    journalists.style.left = '0px'
  } else if (inner.right < outer.right) {
    journalists.style.left = `-${inner.width - outer.width}px`
  }
}
