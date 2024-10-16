// main css
import "../styles/main.scss";

// select2 js
import "select2";

// slick slider js
import "slick-carousel/slick/slick.min.js";

// jquery ui js
import "jquery-ui/ui/widgets/slider";

import WOW from "wowjs";
new WOW.WOW({
  live: false,
}).init();
import "wowjs/css/libs/animate.css";

// aos init
import AOS from "aos";
AOS.init({
  offset: 40,
  duration: 1000,
  easing: "ease",
});

// marquee js
import "jquery.marquee";

// vanilla tilt js
import VanillaTilt from "vanilla-tilt";
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 16,
  speed: 500,
  perspective: 5000,
  scale: 1.06,
});

import "./modules/test.js";
