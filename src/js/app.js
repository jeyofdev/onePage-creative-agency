// import app js
import scroll from '@js/app/scroll-nav.js'
import { navButtonTrigger, navItemClick, navAnimatedOnScroll } from '@js/app/nav.js'

// libraries
const $ = require('jquery')
const classie = require('classie')
require('@js/lib/bootstrap')
require('jquery.easing')

// code js
scroll()
navButtonTrigger()
navItemClick()
navAnimatedOnScroll()
