const $ = require('jquery')
const classie = require('classie')

/**
 * Activate animation of nav trigger
 */
export function navButtonTrigger () {
  $(document).ready(function () {
    $('.navbar-trigger').click(function () {
      $(this).toggleClass('is-active')
      $('.navbar-nav').toggleClass('show')
    })
  })
}

/**
 * Close the responsive menu on nav item click
 */
export function navItemClick () {
  $(document).ready(function () {
    $('.scroll-trigger').click(function () {
      $('.scroll-trigger').removeClass('active')
      $(this).toggleClass('active')
      $('.navbar-trigger').removeClass('is-active')
      $('.navbar-nav').removeClass('show')
    })
  })
}

/**
 * Animate the navbar on scroll
 */
export function navAnimatedOnScroll () {
  const animatedHeader = (function () {
    const docElem = document.documentElement
    const header = document.querySelector('.navbar')
    const changeHeaderOn = 50

    let didScroll = false

    function init () {
      window.addEventListener('scroll', function (event) {
        if (!didScroll) {
          didScroll = true
          setTimeout(scrollPage, 50)
        }
      }, false)
    }

    function scrollPage () {
      const sy = scrollY()
      if (sy >= changeHeaderOn) {
        classie.add(header, 'top-nav-collapse')
      } else {
        classie.remove(header, 'top-nav-collapse')
      }
      didScroll = false
    }

    function scrollY () {
      return window.pageYOffset || docElem.scrollTop
    }

    init()
  })()
}
