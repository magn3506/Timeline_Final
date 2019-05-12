"use strict";
window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("init");

  getJson();
}

function getJson() {
  //RESET

  fetch(
    "https://magnusvjensen.dk/3_sem/afleveringer/timeline/wordpress/wp-json/wp/v2/timeline?per_page=100"
  )
    .then(res => res.json())
    .then(data => {
      orderlist(data);
    });
}

function orderlist(data) {
  let orderList = data.sort(sortListByOrder);

  console.log(orderList);

  orderList.forEach(movie => {
    displayMovie(movie);
  });

  //   scrolling();
}
//SORTS LIST BT ORDER GIVEN IN DATA IN WP
function sortListByOrder(a, b) {
  if (a.acf.order < b.acf.order) {
    return -1;
  } else {
    return 1;
  }
}

//DISPLAY

function displayMovie(movie) {
  console.log(movie);
  let element = movie.acf;

  //CREATES NAV ---------------
  let li = document.createElement("li");
  let a = document.createElement("a");

  li.id = `list${element.order}`;
  a.href = `#section${element.order}`;
  a.innerHTML = `<span>${element.title}</span>` + `<div>${element.order}</div>`;

  document.querySelector("#timeline_nav").appendChild(li);
  document.querySelector(`#list${element.order}`).appendChild(a);
  //----------------------

  // loadSVG(element);

  let target = document.querySelector("#target");
  let output = document.querySelector("#output");

  let clone = target.cloneNode(true).content;
  clone.querySelector(".date").textContent = element.rl_date;

  clone.querySelector(".movie_wrap").id = `section${element.order}`;
  clone.querySelector(".h_title").textContent = element.title;
  //MAKE IF NULL AND NO SUB TITLE
  clone.querySelector(".sub_title").textContent = element.sub_title;

  clone.querySelector(".year").textContent = element.year;
  clone.querySelector(".imdb_data").textContent = element.imdb_score;
  clone.querySelector(".runtime").textContent = element.runtime;
  clone.querySelector(".text").textContent = element.wr + "k";

  //   let maxValue = 2100000000;

  //   let op = (element.op_weekend / maxValue) * 100;
  //   let dom = (element.tlg_domestic / maxValue) * 100;
  //   let foreign = (element.tlg_foreign / maxValue) * 100;

  //   let world = foreign + dom;

  clone.querySelector(".o_w").style.width = 0 + "%";
  clone.querySelector(".dom").style.width = 0 + "%";
  clone.querySelector(".for").style.width = 0 + "%";
  clone.querySelector(".world").style.width = 0 + "%";
  clone.querySelector(".h_img").src = `svg/${element.svg_file_name}.svg`;

  output.appendChild(clone);

  scrolling2(element);
}

function scrolling2(data) {
  console.log("scrolling 2");
  let order = data.order;

  let ironMan1Color1 = "#7B182C";
  let ironMan1Color2 = "#9E2739";

  let hulkColor1 = "#70964b";
  let hulkColor2 = "#455d3b";

  let thor1Color1 = "#404B56";
  let thor1Color2 = "#FADF7F";

  let cap1Color1 = "#123344";
  let cap1Color2 = "#104663";

  let avenger1color1 = "#D0CCCC";
  let avenger1color2 = "#6f195f";

  let gtg1Color1 = "#001A26";
  let gtg1Color2 = "#009085";

  let ant1Color1 = "#ff5a35";
  let ant1Color2 = "#b5c7d2";

  let dr1Color1 = "#bf3c44";
  let dr1Color2 = "#df9d60";

  let spider1Color1 = "#25466b";
  let spider1Color2 = "#920628";

  let blackP1Color1 = "#2D2D2D";
  let blackP1Color2 = "#1C1C1C";

  let capMColor1 = "#272A5D";
  let capMColor2 = "#911919";

  let c = 0.1;
  let p = 0.5;

  var controller = new ScrollMagic.Controller({});

  var tween = TweenMax.from(`#section${order}`, 1, {
    x: -1500,

    ease: Back.easeOut.config(1.2)
  });

  if (order === "01") {
    var color = TweenMax.to("html", c, {
      "--color_1": ironMan1Color1,
      "--color_2": ironMan1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 40,0 70,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "02") {
    var color = TweenMax.to("html", c, {
      "--color_1": hulkColor1,
      "--color_2": hulkColor2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 80,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "03") {
    var color = TweenMax.to("html", c, {
      "--color_1": ironMan1Color1,
      "--color_2": ironMan1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 40,0 70,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "04") {
    var color = TweenMax.to("html", c, {
      "--color_1": thor1Color1,
      "--color_2": thor1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 80,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "05") {
    var color = TweenMax.to("html", c, {
      "--color_1": cap1Color1,
      "--color_2": cap1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 80,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "06") {
    var color = TweenMax.to("html", c, {
      "--color_1": avenger1color1,
      "--color_2": avenger1color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 15,0 80,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "07") {
    var color = TweenMax.to("html", c, {
      "--color_1": ironMan1Color1,
      "--color_2": ironMan1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 40,0 70,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "08") {
    var color = TweenMax.to("html", c, {
      "--color_1": thor1Color1,
      "--color_2": thor1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 15,0 90,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "09") {
    var color = TweenMax.to("html", c, {
      "--color_1": cap1Color1,
      "--color_2": cap1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 80,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "10") {
    var color = TweenMax.to("html", c, {
      "--color_1": gtg1Color1,
      "--color_2": gtg1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 13,0 95,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "11") {
    var color = TweenMax.to("html", c, {
      "--color_1": avenger1color1,
      "--color_2": avenger1color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 5,0 95,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "12") {
    var color = TweenMax.to("html", c, {
      "--color_1": ant1Color1,
      "--color_2": ant1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 90,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "13") {
    var color = TweenMax.to("html", c, {
      "--color_1": cap1Color1,
      "--color_2": cap1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 0,0 100,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "14") {
    var color = TweenMax.to("html", c, {
      "--color_1": dr1Color1,
      "--color_2": dr1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 75,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "15") {
    var color = TweenMax.to("html", c, {
      "--color_1": gtg1Color1,
      "--color_2": gtg1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 10,0 90,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "16") {
    var color = TweenMax.to("html", c, {
      "--color_1": spider1Color1,
      "--color_2": spider1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 90,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "17") {
    var color = TweenMax.to("html", c, {
      "--color_1": thor1Color1,
      "--color_2": thor1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 90,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "18") {
    var color = TweenMax.to("html", c, {
      "--color_1": blackP1Color1,
      "--color_2": blackP1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 90,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "19") {
    var color = TweenMax.to("html", c, {
      "--color_1": avenger1color1,
      "--color_2": avenger1color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 12,0 85,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "20") {
    var color = TweenMax.to("html", c, {
      "--color_1": ant1Color1,
      "--color_2": ant1Color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 10,0 80,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "21") {
    var color = TweenMax.to("html", c, {
      "--color_1": capMColor1,
      "--color_2": capMColor2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 70,100" },
      ease: Back.easeOut.config(1.7)
    });
  } else if (order === "22") {
    var color = TweenMax.to("html", c, {
      "--color_1": avenger1color1,
      "--color_2": avenger1color2
    });
    var bg = TweenMax.to(".bg_poly", p, {
      attr: { points: "0,100 0,0 20,0 85,100" },
      ease: Back.easeOut.config(1.7)
    });
  }

  var activeNav = TweenMax.to(`#list${order} > a`, 1, {
    color: "white"
  });

  //   BOX OFFICE DATA

  let maxValue = 2100000000;

  let op = (data.op_weekend / maxValue) * 100;
  let dom = (data.tlg_domestic / maxValue) * 100;
  let foreign = (data.tlg_foreign / maxValue) * 100;

  let world = foreign + dom;

  let boxTime = 1;

  var opTween = TweenMax.to(".o_w", boxTime, {
    width: op + "%",
    delay: 0.6
  });
  var domTween = TweenMax.to(".dom", boxTime, {
    width: dom + "%",
    delay: 0.8
  });
  var foreignTween = TweenMax.to(".for", boxTime, {
    width: foreign + "%",
    delay: 1
  });
  var worldTween = TweenMax.to(".world", boxTime, {
    width: world + "%",
    delay: 1.2
  });

  //   clone.querySelector(".dom").style.width = dom + "%";
  //   clone.querySelector(".for").style.width = foreign + "%";
  //   clone.querySelector(".world").style.width = world + "%";

  var scene = new ScrollMagic.Scene({
    triggerElement: `#section${order}`
  })
    .setTween([
      bg,
      color,
      activeNav,
      opTween,
      domTween,
      foreignTween,
      worldTween
    ])
    .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: `#section${order}`,
    // offset: 0, // start this scene after scrolling for 50px
    reverse: false
    // triggerHook: "onEnter"
  })
    // .addIndicators() // add indicators (requires plugin)
    .setTween(tween)
    .addTo(controller);
}
