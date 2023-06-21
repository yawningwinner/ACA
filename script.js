const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
    let leftposition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    cursor.style.left = leftposition + "px";
    cursor.style.top = topPosition + "px";
     
})

links.forEach(link => {
    link.addEventListener("mouseenter", ()=>{
        cursor.classList.add("large");
    })
});

links.forEach(link => {
    link.addEventListener("mouseleave", ()=>{
        cursor.classList.remove("large");
    })
});

// Animation 

navlinks.forEach((li,i) => {
    li.style.animationDelay = 0 + i*140 + "ms";  
})



function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
  }
  
  const sections = qs('.section', true);
  const timeline = qs('.timeline');
  const line = qs('.line');
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * .8;
  
//   function scrollHandler(e) {
//     const {
//       scrollY
//     } = window;
//     up = scrollY < prevScrollY;
//     down = !up;
//     const timelineRect = timeline.getBoundingClientRect();
//     const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
  
//     const dist = targetY - timelineRect.top;
//     console.log(dist);
  
//     if (down && !full) {
//       set = Math.max(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
//     }
  
//     if (dist > timeline.offsetHeight + 50 && !full) {
//       full = true;
//       line.style.bottom = `-50px`;
//     }
  
//     sections.forEach(item => {
//       // console.log(item);
//       const rect = item.getBoundingClientRect(); //     console.log(rect);
  
//       if (rect.top + item.offsetHeight / 5 < targetY) {
//         item.classList.add('show-me');
//       }
//     }); // console.log(up, down);
  
//     prevScrollY = window.scrollY;
//   }
  
//   scrollHandler();
//   line.style.display = 'block';
//   window.addEventListener('scroll', scrollHandler);


// function scrollHandler(e) {
//     const {
//       scrollY
//     } = window;
//     up = scrollY < prevScrollY;
//     down = !up;
//     const timelineRect = timeline.getBoundingClientRect();
//     const lineRect = line.getBoundingClientRect();

//     const dist = targetY - timelineRect.top;
//     console.log(dist);

//     if (down && !full) {
//       set = Math.max(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
//     }
  
//     if (dist > timeline.offsetHeight + 50 && !full) {
//       full = true;
//       line.style.bottom = `-50px`;
//     }

//     if (up) {
//       set = Math.min(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
      
//       if (dist < timeline.offsetHeight + 50) {
//         full = false;
//         line.style.bottom = `calc(100% - ${set}px)`;
//       }
//     }
  
//     sections.forEach(item => {
//       const rect = item.getBoundingClientRect();
  
//       if (rect.top + item.offsetHeight / 5 < targetY) {
//         if(down) {
//           item.classList.add('show-me');
//         } else if (up) {
//           item.classList.remove('show-me');
//         }
//       }
//     });
  
//     prevScrollY = window.scrollY;
// }

// scrollHandler();
// line.style.display = 'block';
// window.addEventListener('scroll', scrollHandler);

// let lastShownSection = null;


// function scrollHandler(e) {
//     const {
//       scrollY
//     } = window;
//     up = scrollY < prevScrollY;
//     down = !up;
//     const timelineRect = timeline.getBoundingClientRect();
//     const lineRect = line.getBoundingClientRect();

//     const dist = targetY - timelineRect.top;
//     console.log(dist);

//     if (down && !full) {
//       set = Math.max(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
//     }
  
//     if (dist > timeline.offsetHeight + 50 && !full) {
//       full = true;
//       line.style.bottom = `-50px`;
//     }

//     if (up) {
//       set = Math.min(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
      
//       if (dist < timeline.offsetHeight + 50) {
//         full = false;
//         line.style.bottom = `calc(100% - ${set}px)`;
//       }
//     }
  
//     sections.forEach(item => {
//       const rect = item.getBoundingClientRect();
  
//       if (down && rect.top + item.offsetHeight / 5 < targetY) {
//         item.classList.add('show-me');
//         lastShownSection = item;  // Save the last shown section
//       }

//       // If scrolling up and the bottom of the last shown section is above targetY, remove the 'show-me' class
//       if (up && lastShownSection && lastShownSection.getBoundingClientRect().bottom < targetY) {
//         lastShownSection.classList.remove('show-me');
//         lastShownSection = null; // Reset last shown section
//       }
//     });
  
//     prevScrollY = window.scrollY;
// }

// scrollHandler();
// line.style.display = 'block';
// window.addEventListener('scroll', scrollHandler);


// let shownSections = [];

// function scrollHandler(e) {
//     const {
//       scrollY
//     } = window;
//     up = scrollY < prevScrollY;
//     down = !up;
//     const timelineRect = timeline.getBoundingClientRect();
//     const lineRect = line.getBoundingClientRect();

//     const dist = targetY - timelineRect.top;
//     console.log(dist);

//     if (down && !full) {
//       set = Math.max(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
//     }
  
//     if (dist > timeline.offsetHeight + 50 && !full) {
//       full = true;
//       line.style.bottom = `-50px`;
//     }

//     if (up) {
//       set = Math.min(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
      
//       if (dist < timeline.offsetHeight + 50) {
//         full = false;
//         line.style.bottom = `calc(100% - ${set}px)`;
//       }
//     }
  
//     sections.forEach(item => {
//       const rect = item.getBoundingClientRect();
  
//       if (down && rect.top + item.offsetHeight / 5 < targetY && !item.classList.contains('show-me')) {
//         item.classList.add('show-me');
//         shownSections.push(item); // Push onto shown sections
//       }

//       if (up && shownSections.length > 0 && shownSections[shownSections.length - 1].getBoundingClientRect().bottom < targetY) {
//         shownSections[shownSections.length - 1].classList.remove('show-me');
//         shownSections.pop(); // Remove from shown sections
//       }
//     });
  
//     prevScrollY = window.scrollY;
// }

// scrollHandler();
// line.style.display = 'block';
// window.addEventListener('scroll', scrollHandler);

// let shownSections = [];

// function scrollHandler(e) {
//     const {
//       scrollY
//     } = window;
//     up = scrollY < prevScrollY;
//     down = !up;
//     const timelineRect = timeline.getBoundingClientRect();
//     const lineRect = line.getBoundingClientRect();

//     const dist = targetY - timelineRect.top;
//     console.log(dist);

//     if (down && !full) {
//       set = Math.max(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
//     }
  
//     if (dist > timeline.offsetHeight + 50 && !full) {
//       full = true;
//       line.style.bottom = `-50px`;
//     }

//     if (up) {
//       set = Math.min(set, dist);
//       line.style.bottom = `calc(100% - ${set}px)`;
      
//       if (dist < timeline.offsetHeight + 50) {
//         full = false;
//         line.style.bottom = `calc(100% - ${set}px)`;
//       }
//     }
  
//     sections.forEach(item => {
//       const rect = item.getBoundingClientRect();
  
//       if (down && rect.top + item.offsetHeight / 5 < targetY && !item.classList.contains('show-me')) {
//         item.classList.add('show-me');
//         shownSections.push(item); // Push onto shown sections
//       }
//     });

//     if (up && shownSections.length > 0) {
//       for(let i = shownSections.length - 1; i >= 0; i--) {
//         if (shownSections[i].getBoundingClientRect().bottom < targetY) {
//           shownSections[i].classList.remove('show-me');
//           shownSections.splice(i, 1); // Remove from shown sections
//           break;
//         }
//       }
//     }
  
//     prevScrollY = window.scrollY;
// }

// scrollHandler();
// line.style.display = 'block';
// window.addEventListener('scroll', scrollHandler);

let shownSections = [];

function scrollHandler(e) {
    const { scrollY } = window;
    const up = scrollY < prevScrollY;
    const down = !up;

    const timelineRect = timeline.getBoundingClientRect();

    const dist = targetY - timelineRect.top;

    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
      full = true;
      line.style.bottom = `-50px`;
    }

    if (up) {
      set = Math.min(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
      
      if (dist < timeline.offsetHeight + 50) {
        full = false;
        line.style.bottom = `calc(100% - ${set}px)`;
      }
    }

    sections.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
  
      if (down && rect.top + item.offsetHeight / 5 < targetY && !item.classList.contains('show-me')) {
        item.classList.add('show-me');
        if (!shownSections.includes(index)) shownSections.push(index); // Push section index onto shown sections
      }
    });

    if (up && shownSections.length > 0) {
      for(let i = shownSections.length - 1; i >= 0; i--) {
        const item = sections[shownSections[i]];
        const rect = item.getBoundingClientRect();
        if (rect.bottom < targetY) {
          item.classList.remove('show-me');
          shownSections.splice(i, 1); // Remove index from shown sections
          break;
        }
      }
    }
  
    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);

(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);


  