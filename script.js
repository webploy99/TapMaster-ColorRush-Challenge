
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/tapmaster-colorrush-challenge/id6474230690";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/5a/cc/50/5acc5016-ee19-9c0a-a763-bbbd6ef6cafa/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/ed/2d/81/ed2d8161-e165-e96e-a0bc-dcd0e303091b/9e27bb51-1964-4718-8c8a-609a5886a56d_1.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/7c/ea/db/7ceadbe8-ede0-81ce-bf84-79e1d48969c5/e5d1ef21-7832-4ae8-b34f-9d44d9921aea_2.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/f1/aa/52/f1aa52af-7aaf-9ab1-af73-a958fee1a5fd/17939cd5-0d90-4449-975f-c85bf437e276_3.png/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

