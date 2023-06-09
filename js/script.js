// const item1 = document.querySelector('[data-inicio="a"]');

// const movimento1 = new KeyframeEffect(item1, [{ opacity: 0 }, { opacity: 1 }], {
//     delay: 1000,
//     duration: 2000,
//     fill: "forwards",
// });

// const item1Animation = new Animation(movimento1, document.timeline);
// item1Animation.play();

import initAnimaScroll from "./modules/anima-scroll.js";
import initMenuMobile from "./modules/menu-mobile.js";

initAnimaScroll();
initMenuMobile();
