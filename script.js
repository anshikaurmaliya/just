function loco() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".containers"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".containers", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".containers").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

}
loco()


function loader() {

  var tl = gsap.timeline()



  tl.from(".upshoes", {
    x: "500%",
    duration: 1.2,
    ease: "power5.InOut",
  }, "a");
  tl.from(".downshoes", {
    x: "-500%",
    duration: 1.2,
    ease: "power5.InOut",
  }, "a");
  tl.to(".shaod", {
    opacity: 1,
  })
  tl.to(".upshoes", {
    y: "8%",
    duration: 0.3,
    ease: "power5.InOut",
  },"b");

  tl.to(".downshoes", {
    y: "-8%",
    duration: 0.3,
    ease: "power5.InOut",
  },"b");
  tl.to(".upshoes", {
    y: "-10%",
    duration: 0.3,
    ease: "power5.InOut",
  }, "c");
  tl.to(".downshoes", {
    y: "10%",
    duration: 0.3,
    ease: "power5.InOut",
  }, "c");
  tl.to(".lodertext", {
    scaleY: 1
  }, "c")
  tl.to(".lodertext", {
    scale: 20,
    duration: 1.3,
    ease: "power5.InOut",
  }, "d")
  tl.to(".upshoes ", {
    opacity: 0,
    duration: 0.3,
    ease: "power5.InOut",
  }, "d");
  tl.to(".downshoes", {
    opacity: 0,
    duration: 0.3,
    ease: "power5.InOut",
  }, "d");
  tl.to(".firstcontiner", {
    backgroundColor: "black",
    duration: 1
  }, "e");
  tl.to(".lodertext", {
    opacity: 0,
    duration: 0.3,
    ease: "power5.InOut"
  }, "e")
  tl.to(".svgcontiner", {
    opacity: 1,
    duration: 0.3,
    ease: "power5.InOut"
  })
  tl.to(".svgbox1", {
    opacity: 1,
    duration: .9
  }, "e");
  tl.to(".svgbox2", {
    opacity: 1,
    duration: .9
  }, "e");
  tl.to(".svgbox1", {
    x: "200%",
    duration: .9
  }, "slide");
  tl.to(".svgbox2", {
    x: "-200%",
    duration: .9
  }, "slide");
  tl.to(".svg", {
    scale: 55,
    opacity: 1,
    rotate: "180deg",
    duration: 1.2,
    ease: "power5.InOut"
  });
  tl.to(".svg1", {
    scale: 55,
    opacity: 1,
    rotate: "-180deg",
    duration: .9
  });
  tl.to(".mainpageloader", {
    opacity: 1,
    duration: 0.3,
    ease: "power5.InOut"
  })

  tl.to(".texts", {
    y: "250%",
    duration: .4,
    ease: "power5.InOut"
  }, "text")
  tl.to(".texts", {
    scaleY: 1.5,
    duration: .4,
    ease: "cubic-bezier(.07,.95,.91,.11)"
  }, "text")
  tl.to(".texts", {
    scaleY: 1,
    y: "120%",
    duration: .4,
    ease: "cubic-bezier(.07,.95,.91,.11)"

  })
  tl.to(".texts", {
    scaleY: 1.4,
    y: "190%",
    duration: .4,
    ease: "cubic-bezier(.07,.95,.91,.11)"

  })
  tl.to(".texts", {
    scaleY: 1,
    y: "150%",
    duration: .4,
    ease: "cubic-bezier(.07,.95,.91,.11)"

  })

  tl.from(".logo", {
    y: "-60%",
    x: "-80%",
    rotate: "-20deg",
    opacity: 0,
    duration: 0.4,
    ease: "power5.InOut"
  }, "text")

  tl.from(".shoesright", {
    x: "-400%",
    y: "-70%",
    rotate: "-40deg",
    duration: 1,
    ease: "power5.InOut"
  }, "text")
  tl.from(".shoesleft", {
    x: "400%",
    y: "-70%",
    rotate: "40deg",
    duration: 1,
    ease: "power5.InOut"
  }, "text")
  tl.to(".texts", {
    scaleY: 1.5,
    y: "250%",
    delay: 1,
    duration: .4,
    ease: "cubic-bezier(.07,.95,.91,.11)"
  })
  tl.to(".texts", {
    scaleY: 1,
    y: "150%",
    duration: .4,
    ease: "cubic-bezier(.07,.95,.91,.11)"
  })
  tl.to(".texts", {
    y: "220%",
    scaleY: 1.4,
    duration: .4,
    ease: "cubic-bezier(.07,.95,.91,.11)"
  }, "g")
  tl.to(".texts", {
    scaleY: 1,
    y: "150%",
    duration: .6,
    ease: "cubic-bezier(.07,.95,.91,.11)"
  }, "h")

  tl.to(".texts", {
    scaleY: 1,
    y: "10%",
    opacity: 0,
    duration: .4,
    ease: "cubic-bezier(.07,.95,.91,.11)"
  })
  tl.to(".logo", {
    y: "-180%",
    x: "-80%",
    rotate: "-20deg",
    delay: ".4",
    duration: 0.6,
    ease: "power5.InOut"
  }, "h")
  tl.to(".shoesright", {
    x: "-400%",
    y: "-70%",
    rotate: "-40deg",
    duration: 1.9,
    ease: "power5.InOut"
  }, "h")
  tl.to(".shoesleft", {
    x: "400%",
    y: "-70%",
    rotate: "40deg",
    duration: 1.9,
    ease: "power5.InOut"
  }, "h")
  tl.to(".loader", {
    display: "none",
    ease: "cubic-bezier(.07,.95,.91,.11)"
  
  })
  // home
 tl.from(".details .element", {
    y: "200",
    opacity: 0,
    duration: 2,
    stagger: {
      amount: 0.3
    },
    ease: "Power4.easeInOut"
  })
  
 tl.to(".maincard", {
    scale: 1,
    ease: Circ,
    duration: .7
  })
  
 tl.from(".imgleft img", {
    scale: 0.9,
    opacity: 0,
    ease: Circ,
    duration: .7
  })
 tl.from(".imgright img", {
    scale: 0.9,
    opacity: 0,
    ease: Circ,
    duration: .9,
    delay: .5,
  })
  
 


}
loader()


let lodertext = document.querySelector(".lodertext");
let textsplit = lodertext.textContent.split("");
let cutter = "";

textsplit.forEach(function (elem) {
  cutter += `<span class="inline-block">${elem}</span>`;
});

lodertext.innerHTML = cutter;

let spans = document.querySelectorAll(".lodertext span");


gsap.from(".details .element", {
  y: "200",
  opacity: 0,
  duration: 2,
  stagger: {
    amount: 0.3
  },
  ease: "Power4.easeInOut"
})

gsap.to(".maincard", {
  scale: 1,
  ease: Circ,
  duration: .7
})

gsap.from(".imgleft img", {
  scale: 0.9,
  opacity: 0,
  ease: Circ,
  duration: .7
})
gsap.from(".imgright img", {
  scale: 0.9,
  opacity: 0,
  ease: Circ,
  duration: .9,
  delay: .5,
})




function hamburger(){
  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-items');
    const menuItemsDiv = document.getElementById('menu-items');
    const menuItemsImg = document.getElementById('memuimg');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const imgSrc = item.getAttribute('data-hover-img');
            menuItemsImg.src = imgSrc;
            if (menuItemsDiv) {
                menuItemsDiv.style.display = 'block';
                menuItemsImg.classList.add('scale-up');
            }
        });

        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-hover-img');
            menuItemsImg.src = imgSrc;
            if (menuItemsDiv) {
                menuItemsDiv.style.display = 'block';
                menuItemsImg.classList.add('scale-up');
            }
        });
    });
   
   
  });

  let eye =  document.querySelectorAll(".eye")
  document.addEventListener("mousemove", (event) => {
    eye.forEach((eye) => {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = `rotate(${rotation}deg)`;
    });

  
  });
  
  
  }
  hamburger()

  





function secondpage() {
  let tl = gsap.timeline()
  tl.from(".history", {
    y: "100",
    opacity: 0,
    duration: .6,
    scrollTrigger: {
      trigger: ".history",
      scroller: ".containers",
      start: "10% 100%",
      end: "10% 85%",
      scrub: 4,
    }
  })

  gsap.from(".historyheading p", {
    opacity: 0,
    duration: 0.6,

    scrollTrigger: {
      trigger: ".history",
      scroller: ".containers",
      start: "10% 70%",
      end: "10% 30%",
      scrub: 4,
      // markers: true
    }
  });


  tl.from(".jordanblocks .left .same", {
    y: "200",
    opacity: 0,
    duration: .9,
    scrollTrigger: {
      trigger: ".jordanblocks",
      scroller: ".containers",
      start: "10% 90%",
      end: "10% 70%",
      scrub: 4,
      // markers:true,
    }
  }, "a")
  tl.from(".jordanblocks .left .same1", {
    y: "500",
    opacity: 0,
    duration: .9,
    scrollTrigger: {
      trigger: ".jordanblocks",
      scroller: ".containers",
      start: "10% 90%",
      end: "10% 60%",
      scrub: 4,
      // markers:true,
    }
  }, "a")
  tl.from(".jordanblocks .right .same", {
    y: "200",
    opacity: 0,
    duration: .9,
    scrollTrigger: {
      trigger: ".jordanblocks",
      scroller: ".containers",
      start: "10% 70%",
      end: "10% 40%",
      scrub: 4,
      // markers:true,
    }
  })
  tl.from(".jordanblocks .right .same1", {
    y: "300",
    opacity: 0,
    duration: .9,
    scrollTrigger: {
      trigger: ".jordanblocks",
      scroller: ".containers",
      start: "10% 60%",
      end: "10% 40%",
      scrub: 4,
      // markers:true
    }
  })
  var text = document.querySelector("#All-Collaction")
  textsplit = text.textContent.split("  ")
  var clutter = ""
  textsplit.forEach(function (elem) {
    clutter += `<span class="inline-block font-[Neumatic]">${elem}</span>`;
  });
  text.innerHTML = clutter;

  tl.from("#All-Collaction span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: "Power5.easeIn",
    scrollTrigger: {
      trigger: "#All-Collaction",
      scroller: ".containers",
      start: "10% 80%",
      end: "10% 60%",
      scrub: 4,
      // markers: true,
    }
  });

}
secondpage()


let productDetails = [
  {
    backgroundImage: "https://static.nike.com/a/images/gq4zw6tlx3hdo4461cmf/air-jordan-3.png",
    imgleft: "https://static.nike.com/a/images/tqyxqv5jjxxshpjfe9wv/air-jordan-3.png",
    imgright: "https://static.nike.com/a/images/q7nt8hefp330wdewgayh/air-jordan-3.png",
    reliase: 2002,
    name: "Airjordan4",
    color: "white / Red",
    collaction: "S.Redman",
    location: "Beaverton,orgeon",
    heading: "the ultimate history of the Airjordan "
  },

  {
    backgroundImage: "https://static.nike.com/a/images/gmp2gru4y1xlw279fs3x/air-jordan-33-retro-og-collection-jordancom.png",
    imgleft: "https://static.nike.com/a/images/52afe1b1-c121-4471-a04f-e3deafe76485/air-jordan-35.png",
    imgright: "https://static.nike.com/a/images/6923a990-f12b-403a-90f9-e0631923f6b1/air-jordan-35.png",
    reliase: 2019,
    name: "Airjordan4",
    color: "white/ universal Red-black",
    collaction: "jordan Brand",
    location: "Beaverton,orgeon",
    heading: " This marks the beginning of an era  where the arrival of an iconic."

  },
  {
    backgroundImage: "https://static.nike.com/a/images/i7uaonkqzhahrozhpake/air-jordan-17-retro-og-collection-jordancom.png",
    imgleft: "https://static.nike.com/a/images/tujmns1y1n4khtkyvdbm/air-jordan-32.png",
    imgright: "https://static.nike.com/a/images/num44tyvcpavr3dg4rnd/air-jordan-32.png",
    reliase: 2020,
    name: "Airjordan5",
    color: "white/ black",
    collaction: "S.Redman",
    location: "new York, USA",
    heading: "the one that started it all"
  },


  {
    backgroundImage: "https://static.nike.com/a/images/81c12884-d362-4991-be27-aea6a2d48aea/air-jordan-35.jpg",
    imgleft: "https://static.nike.com/a/images/uln51adrziplnkqea0iv/air-jordan-33-retro-og-collection-jordancom.png",
    imgright: "https://static.nike.com/a/images/ze6onq5g3jtwqjlysou7/air-jordan-33-retro-og-collection-jordancom.png",
    reliase: 2001,
    name: "Airjordan3",
    color: "Black/ varisty Red",
    collaction: "jordan Brand",
    location: "salem , oregon",
    heading: "the journey of jordan begings with  sights set   "
  },

]



function select(elem) {
  return document.querySelector(elem)
}
var curr = 0;
isAnimated = false;

function setdata(index) {

  select(".detail1 h1").textContent = productDetails[index].reliase
  select(".detail2 h1").textContent = productDetails[index].color
  select(".detail3 div").textContent = productDetails[index].name
  select(".detail4 h1").textContent = productDetails[index].collaction
  select(".detail5 h1").textContent = productDetails[index].location
  select(".detail6").textContent = productDetails[index].heading
}

document.addEventListener("DOMContentLoaded", function () {
  select(".maincard").style.backgroundImage = `url(${productDetails[curr].backgroundImage})`;
  select(".maincard .imgleft img").src = productDetails[curr].imgleft;
  select(".maincard .imgright img").src = productDetails[curr].imgright;
  select(".incomingcard").style.backgroundImage = `url(${productDetails[curr + 1].backgroundImage})`;
  select(".incomingcard .imgleft img").src = productDetails[curr + 1].imgleft;
  select(".incomingcard .imgright img").src = productDetails[curr + 1].imgright;

  setdata(curr)
  select()
  curr = 2
});

function shoesImage() {
  if (!isAnimated) {
    isAnimated = true;
    var tl = gsap.timeline({
      onComplete: function () {
        isAnimated = false
        let main = select(".maincard")
        let incoming = select(".incomingcard")

        incoming.classList.remove("z-[2]")
        incoming.classList.add("z-[3]")
        incoming.classList.remove("incomingcard")


        main.classList.remove("z-[3]")
        main.classList.add("z-[2]")
        gsap.to(main, {
          scale: 1,
          opacity: 1,

        })
        if (curr === productDetails.length) curr = 0
        select(".maincard .imgleft img").src = productDetails[curr].imgleft;
        select(".maincard .imgright img").src = productDetails[curr].imgright;
        curr++
        main.classList.remove("maincard")
        incoming.classList.add("maincard")
        main.classList.add("incomingcard")

      }
    })
    tl.to(".maincard", {
      scale: 1.1,
      opacity: 0,
      ease: Circ,
      duration: .7
    }, "a")
      .from(".incomingcard", {
        scale: .9999,
        opacity: 0,
        ease: Circ,
        duration: .9
      }, "a")
      .from(".imgleft img", {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: .7
      })
      .from(" .imgright img", {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: .7
      })
  }


}


let changeimage = document.querySelector(".homepage");

if (changeimage) {
  changeimage.addEventListener("click", () => {
    shoesImage();
    setdata(curr - 1)
    gsap.from(".details .element", {
      y: "200",
      opacity: 0,
      duration: 2,
      stagger: {
        amount: 0.3
      },
      ease: "Power4.easeInOut"
    })

  });
}



(function containersCreator() {
  document.querySelectorAll(".element").forEach(function (elem) {
    let div = document.createElement("div");
    div.classList.add(`${elem.classList[0]}container`, "overflow-hidden");
    div.appendChild(elem);
    select(".details").appendChild(div)
  });
})();

document.addEventListener("mousemove", function (e) {
  const xAxis = (window.innerWidth / 2 - e.clientX) / 30; // Adjust sensitivity
  const yAxis = (window.innerHeight / 2 - e.clientY) / 30; // Adjust sensitivity

  document.querySelectorAll('.imgright img, .imgleft img').forEach(function (elem) {
    elem.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
});

document.querySelectorAll('.imgright img, .imgleft img').forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    elem.style.transition = "none";
  });

  elem.addEventListener("mouseleave", function () {
    elem.style.transition = "transform 0.5s ease-out";
    elem.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
});


function menubar() {
  let open = document.querySelector(".open")
  open.addEventListener("click", function () {
    let tl = gsap.timeline()
    tl.to(open, {
      duration: .6,
      opacity: 0,
      ease: "Power4.easeInOut"
    }, "s")
    tl.to(".menubar", {
      y: "105%",
      duration: 1,
      ease: "Power4.easeInOut"
    }, "s")
    tl.to(close, {
      opacity: 1,
      duration: 1,
      ease: "Power4.easeInOut"
    })
  })

  let close = document.querySelector(".close")

  close.addEventListener("click", function () {
    let tl = gsap.timeline()
    tl.to(close, {
      opacity: 0,
      duration: .6,
      ease: "Power4.easeInOut"
    }, "d")
    tl.to(".menubar", {
      y: "-105%",
      duration: 1,
      ease: "Power4.easeInOut"
    }, "d")
    tl.to(open, {
      duration: .1,
      opacity: 1,
      ease: "Power4.easeInOut"
    })
  })


}
menubar()

function navbarlogo(){
  var tl =  gsap.timeline()
  tl.to(".SVG , .open", {
    duration: 1,
    color:"black",
    fill: "red",
    ease: "Power4.easeInOut",
    scrollTrigger: {
      trigger: ".homepage",
      scroller: ".containers",
      start: "90% 0%",
      scrub: 4,
      // markers: true
    }
  });


}

navbarlogo()


gsap.to(".imgleft", {
  y: "-40%",
  duration: 1,
  opacity: 1,
  ease: "Power4.easeInOut",
  scrollTrigger: {
    trigger: ".homepage",
    scroller: ".containers",
    start: "95% 95%",
    end: "95% 50%",
    scrub: 5,
    //  markers: true
  }

})
gsap.to(".imgright", {
  y: "-40%",
  duration: 1,
  opacity: 1,
  ease: "Power4.easeInOut",
  scrollTrigger: {
    trigger: ".homepage",
    scroller: ".containers",
    start: "90% 92%",
    end: "90% 50%",
    scrub: 5,
    //  markers: true
  }

})



var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".details",
    scroller: ".containers",
    start: "90% 90%",
    end: "90% 50%",
    scrub: 5,
    pin: true,
    // markers: true
  }
})

tl3.to(".detail1", {
  y: "10wv",
  opacity: 0,

  stagger: {
    amount: 0.3,
  },
  ease: "Power4.easeInOut",
}, "h")


tl3.to(".detail4", {
  y: "10vw",
  opacity: 0,

  stagger: {
    amount: 0.3,
  },
  ease: "Power4.easeInOut",
}, "h")
tl3.to(".detail3", {
  y: "10vw",
  opacity: 0,
  stagger: {
    amount: 0.3,
  },
  ease: "Power4.easeInOut",
}, "h")
tl3.to(".detail2", {
  y: "10vw",
  opacity: 0,

  stagger: {
    amount: 0.3,
  },
  ease: "Power4.easeInOut",
}, "h")
tl3.to(".detail5", {
  y: "10vw",
  opacity: 0,
  stagger: {
    amount: 0.3,
  },
  ease: "Power4.easeInOut",
}, "h")

gsap.to(".detail6", {
  y: "-20vw",
  duration: .1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".homepage",
    scroller: ".containers",
    start: "90% 90%",
    end: "90% 50%",
    scrub: 5,
    // pin: true,
    // markers: true
  }
})





var swiper = new Swiper('.slider', {
  spaceBetween: 10,
  mousewheel: true,
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {  // Correct way to define event handlers
    slideChange: function () {
      thumb1.slideTo(swiper.activeIndex);
      thumb2.slideTo(swiper.activeIndex);
      document.querySelectorAll(".thumb1 .swiper-slide").forEach((slide, index) => {
        slide.className = "swiper-slide";
        if (index == swiper.activeIndex) {
          slide.classList = "swiper-slide  swiper-slide-active";
        }
      })

    }
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

var thumb1 = new Swiper('.thumb1 ', {
  spaceBetween: 10,
  slidesPerView: 4,
  direction: 'vertical',
  speed: 800,
  on: {
    click() {
      swiper.slideTo(thumb1.clickedIndex);
      animtioncall()

    
    },
    slideChange() {
      swiper.slideTo(thumb1.activeIndex);
    }
  }

});
var thumb2 = new Swiper('.thumb2 ', {
  spaceBetween: 10,
  slidesPreView: 1,
  speed: 800,
  on: {
    click() {
      swiper.slideTo(thumb2.clickedIndex);
      animtioncall()

    },
    slideChange() {
      swiper.slideTo(thumb2.activeIndex);
    }
  }

});


function animtioncall(){
  var tl =  gsap.timeline()
  tl.from(".heading-light , .shoeimg img , .heading-dark ,.wave img",{
    x:"100%",
    stagger:{
      amount: .5,
      grid: [1, 2 ,3],
      axis: "x",
      ease: "elastic"
    },
    duration: 1,
    opacity: 0,
    ease: "power4.easeInOut"
  })
   tl.from(".title , .price , .specs " ,{
    y:"50%",
    duration: 1,
    opacity: 0,
    ease: "power4.easeInOut",
    stagger:{
      amount: .5,
      grid: [1, 2],
      axis: "x",
      ease: "elastic"
    },
  })
  tl.from(".buy" ,{
    y:"50%",
    duration: 1,
    opacity: 0,
    ease: "power4.easeInOut",
  
  })
  
  
}

gsap.from(".dicountpart .distext , .dictime  .time , .sell,.shopnow",{
  y:"100%",
  duration: 1,
  stagger:{
    amount: .5,
    grid: [1, 2],
    axis: "x",
    ease: "elastic"
  },
  opacity: 0,
  ease: "power4.easeInOut",
  scrollTrigger:{
    trigger: "#shopnow",
    scroller: ".containers",
    start: "0% 50%",
    end: "0% 30%",
    scrub: 5,
    // markers: true
  }
})

var tl =  gsap.timeline()
tl.from(".heading-light ,.shoeimg img , .heading-dark ",{
  x:"100%",
  stagger:{
    amount: .5,
    grid: [1, 2],
    axis: "x",
    ease: "elastic"
  },
  duration: 1,
  opacity: 0,
  ease: "power4.easeInOut"
})
 tl.from(".title , .price , .specs " ,{
  y:"50%",
  duration: 1,
  opacity: 0,
  ease: "power4.easeInOut",
  stagger:{
    amount: .5,
    grid: [1, 2],
    axis: "x",
    ease: "elastic"
  },
})
tl.from(".buy" ,{
  y:"50%",
  duration: 1,
  opacity: 0,
  ease: "power4.easeInOut",

})


// thirdpage ////////////////////////////////////////

function thirdpage() {
  document.addEventListener('DOMContentLoaded', () => {
    const videoSections = document.querySelectorAll('.videosection');
    const Videoshow = document.querySelector('.videoconatiners');
    const mainVideo = document.getElementById('main-video');
    const mainVideoSource = mainVideo.querySelector('source');
    const mainImage = document.querySelector('.main-image');

    let videotl = gsap.timeline({ paused: true });

    videotl.to(Videoshow, {
      height: "100vh",
      width: "100%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      duration: 1,
      ease: "power2.inOut"
    });

    videoSections.forEach((section) => {
      const videoSrc = section.getAttribute('data-video');
      const imageSrc = section.getAttribute('data-image');

      if (videoSrc) {
        const preloadedVideo = document.createElement('video');
        preloadedVideo.src = videoSrc; // Preloading the video
      }

      section.addEventListener('click', () => {
        if (videoSrc) {
          mainVideoSource.setAttribute('src', videoSrc);
          mainVideo.style.display = 'block';
          mainImage.style.display = 'none';
          mainVideo.load();
          videotl.play();
          mainVideo.muted = !mainVideo.muted;
        } else if (imageSrc) {
          mainImage.setAttribute('src', imageSrc);
          mainVideo.style.display = 'none';
          mainImage.style.display = 'block';
          videotl.play();
        }
      });
    });

    Videoshow.addEventListener("click", (e) => {
      videotl.reverse();
      mainVideo.muted = !mainVideo.muted;
    });

    gsap.from(".videoshowcontiner", {
      duration: 1,
      ease: "Power5.easeIn",
      scrollTrigger: {
        trigger: ".thirdpage",
        scroller: ".containers",
        start: "top 0%",
        end: "top -50%",
        scrub: 5,
        pin: true,
      }
    });

    gsap.from(".videoshowcontiner, .videoconatiners", {
      opacity: 0,
      y: "100%",
      duration: 1,
      ease: "Power5",
      scrollTrigger: {
        trigger: ".thirdpage",
        scroller: ".containers",
        start: "top 60%",
        end: "top 30%",
        scrub: 5,
      }
    });
  });
}

thirdpage();




function lastpage() {
  var cursore = document.querySelector(".cursure");
  var lastpage = document.querySelector(".video");
  var video = document.querySelector(".video video" );
  const paused = document.getElementById('paused');
  const paly = document.getElementById('paly');
  var flag = 0;

  lastpage.addEventListener("mousemove", function (e) {
    var rect = lastpage.getBoundingClientRect();
    gsap.to(cursore, {
      x: e.clientX - rect.left - 600,
      y: e.clientY - rect.top - 300,
      ease: "expoScale(1, 2)"
    });
  });
  
 
  const handleClick = function (e) {
    if (flag === 0) {
      gsap.to(cursore, {
        scale: 0.4,
        ease: "expo.inOut"
      });
      video.play();
      paused.style.opacity = '1';
      paly.style.opacity = '0';
      flag = 1;
    } else {
      gsap.to(cursore, {
        scale: 1,
        ease: "expo.inOut"
      });
      video.pause();
      paused.style.opacity = '0';
      paly.style.opacity = '1';
      flag = 0;
    }
  };

  // Only add click event to the lastpage if screen size is max-width 599px
    cursore.addEventListener("click", handleClick);
  lastpage.addEventListener("click", handleClick )

 

 
    var tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".lastpage",
          scroller: ".containers",
          start: "50% 0%",
          end: "50% -100%",
          scrub: 5,
          pin: true,
     
      
      }
  });
  gsap.from(".video", {
    y: "100%",
    scale:.7,
    duration: 1,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: ".lastpage",
      scroller: ".containers",
      start: "top 50%",
      end: "top 20%",
      scrub: 5,
      markers:true,
      // pin:true
    }
  })
  tl.from(".memory-of-jordan", {
      y: "100%",
      scale: 0.4,
      duration: 2,
      stagger: {
        each: 2,
      },
      ease: "expoScale(1, 2)"
  });

}
lastpage()


function startCountdown() {
  const countdownElement = document.getElementById('countdown');

  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 2);

  function updateCountdown() {
    const now = new Date();
    
    if (now < startDate) {
      countdownElement.innerText = "The countdown has not started yet.";
      return;
    }
    
    const timeLeft = endDate - now;

    if (timeLeft < 0) {
      countdownElement.innerText = "The countdown has ended.";
      clearInterval(intervalId);
      return;
    }

    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    countdownElement.innerText = `Time left: ${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds`;
  }

  updateCountdown();
  const intervalId = setInterval(updateCountdown, 1000);
}

startCountdown();






function fotter() {


  var tl = gsap.timeline();


  gsap.to(".overlayfotter", {
      y: "-90%",
      duration: 1,
      ease: "power4.easeInOut",
      scrollTrigger: {
          trigger: ".fotter",
          scroller: ".containers",
          start: "30% 0%",
          end: "30% -105%",
          scrub: 5,
          pin: true,
          // markers: true,
      }
  });
}

fotter();


function discount() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".overlayfotter",
      scroller: ".containers",
      start: "95% 0%",
      end: "95% -20%",
      scrub: 4,
      // markers: true,
    }
  })

  tl.from(".textyear .uppercase", {
    y: "100%",
    duration: .9,
    stagger: {
      amount: .5,
    },
  ease: "elastic.out(1, 0.3)"
  }, "same")

  tl.from(".textyear .uppercase h1", {
    y: "120%",
    opacity:0,
    duration: .9,
    stagger: {
      amount: .5,
    },
  

  }, "same")
  tl.from(".shownowbtn", {
    opacity:0,
    duration: .9,
    stagger: {
      amount: .5,
    },
  

  }, "same")

  tl.from("#just , #dropped",{
    y:"100%",
    opacity: 0,
    stagger:{
      amount: 0.5,
    },
    duration: 0.4,

  },"same")
  tl.from("#available",{
    y:"100%",
    opacity: 0,
    duration: 0.4,
   

  })
  
  tl.from(".shoesroted img ", {
    y: "100%",
    duration: 1,
    stagger: {
      amount: .5,
    },
    ease: "bounce.out"

  },"same2")
  tl.from(".fotterright img", {
    y: "-100%",
    duration: 1,
    stagger: {
      amount: .5,
    },
    ease: "bounce.out"

  },"same2")
}
discount()
var main = document.querySelector(".main-content");
var cursor = document.querySelector(".cursor");
var imgdiv = document.querySelectorAll(".item-img");
main.addEventListener("mousemove", (e) => {
  const rect = main.getBoundingClientRect();
  gsap.to(cursor, {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top

  });
});
imgdiv.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.innerHTML = "view more";
    cursor.style.backgroundColor = "#ffffff5c";
    gsap.to(cursor, {
      scale: 2,
      duration: 0.5,
      ease: "back.out",
    });
  });
});
imgdiv.forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    cursor.style.backgroundColor = "black";

    gsap.to(cursor, {
      scale: 1,
      duration: 0.5,
      ease: "back.out",
    });
  });
});