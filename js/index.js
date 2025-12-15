const $ = (e) => document.getElementById(e);
const GetClasses = (e) => document.getElementsByClassName(e);

const backCoverBlur = $("backCoverBlur");
const menuBtnOpen = $("menuBtnOpen");
const menuBtnClose = $("menuBtnClose");
const sideBarMobile = $("sideBarMobile");

/* بستن منو با کلیک روی بک‌کاور */
backCoverBlur.onclick = () => {
  backCoverBlur.style.display = "none";
  sideBarMobile.classList.remove("openedMenu");
  sideBarMobile.classList.add("closedMenu");
};

/* باز کردن منو */
menuBtnOpen.onclick = () => {
  sideBarMobile.classList.add("openedMenu");
  sideBarMobile.classList.remove("closedMenu");
  backCoverBlur.style.display = "block";
};

/* بستن منو با دکمه بستن */
menuBtnClose.onclick = () => {
  sideBarMobile.classList.remove("openedMenu");
  sideBarMobile.classList.add("closedMenu");
  backCoverBlur.style.display = "none";
};

/* بستن منو با کلیک روی لینک‌ها */
const lies = $("ulMobile").getElementsByTagName("a");

for (let i = 0; i < lies.length; i++) {
  lies[i].onclick = () => {
    sideBarMobile.classList.remove("openedMenu");
    sideBarMobile.classList.add("closedMenu");
    backCoverBlur.style.display = "none";
  };
}

/* جستجو */
const inpSearch = $("inpSearch");

$("searchBtn").onclick = () => {
  inpSearch.classList.toggle("hidden");
  inpSearch.classList.toggle("showInputSearch");
  $("searchBtn").classList.toggle("showIcon");
};

/* منوی محصولات */
$("productLi").onclick = () => {
  console.log("clicked product li");

  $("ulChildMobileMenu").classList.toggle("hidden");
  $("productLi").classList.toggle("text-blue");
};

/* زیرمنوهای تو در تو */
const liChildes = $("ulChildMobileMenu").getElementsByTagName("li");

for (let i = 0; i < liChildes.length; i++) {
  liChildes[i].onclick = (e) => {
    let l = e.currentTarget;
    l.querySelector("#ul").classList.toggle("hidden");
  };
}

/**
 * This Scope of code is responsible for generating automation silders
 */
{
  const automationsData = [
    {
      where: "ملک شهر اصفهان",
      text: "هوشمندسازی شهربازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "ماه شهر نور",
      text: "هوشمندسازی مجموعه تفریحی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "آمازون پلازا کرمانشاه",
      text: "هوشمندسازی شهربازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "سمین پارک شهریار",
      text: "هوشمندسازی شهربازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "پارک ساحلی خمینی شهر",
      text: "هوشمندسازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "هایپرمی اصفهان",
      text: "هوشمندسازی شهربازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "دهکده ساحلی چادگان",
      text: "هوشمندسازی شهربازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "پارک مدنی کاشان",
      text: "هوشمندسازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "پارک پیروزی خمینی شهر",
      text: "هوشمندسازی",
      imageSrc: "images/pirozy.jfif",
    },
    {
      where: "آبشار اصفهان",
      text: "هوشمندسازی",
      imageSrc: "images/abshar.png",
    },
    {
      where: "پل تمدن اصفهان",
      text: "هوشمندسازی",
      imageSrc: "images/tamadoon.jpg",
    },
    {
      where: "پارک بادی سپاهان شهر",
      text: "هوشمندسازی",
      imageSrc: "images/sepahanShahr.jpg",
    },
    {
      where: "بوستان مادر شاهین شهر",
      text: "هوشمندسازی",
      imageSrc: "images/shahinShahr.webp",
    },
    {
      where: "قلعه شادی گز و برخوار",
      text: "هوشمندسازی شهربازی",
      imageSrc: "images/gazBarkhovar.webp",
    },
    {
      where: "سرارود مبارکه",
      text: "هوشمندسازی",
      imageSrc: "images/saraRod.png",
    },
    {
      where: "استارمال اهواز",
      text: "هوشمندسازی",
      imageSrc: "images/starmal.png",
    },
    {
      where: "اکتیویت گیم سنتر اصفهان",
      text: "هوشمندسازی",
      imageSrc: "images/activGame.jpg",
    },
    {
      where: "بهارستان اصفهان",
      text: "هوشمندسازی",
      imageSrc: "images/baharestan.jpg",
    },
    {
      where: "متاورس اراک",
      text: "هوشمندسازی",
      imageSrc: "images/parking.jpg",
    },
    {
      where: "برج مروارید مشهد",
      text: "هوشمندسازی شهربازی",
      imageSrc: "images/malakShahr.jpg",
    },
  ];

  const automationsHomeData = [
    {
      where: "سرزمین آکا اصفهان",
      text: "هوشمندسازی خانه بازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "کیندرلند مشهد",
      text: "هوشمندسازی خانه بازی",
      imageSrc: "images/malakShahr.jpg",
    },
    {
      where: "شادسر رامسر",
      text: "هوشمندسازی خانه بازی",
      imageSrc: "images/malakShahr.jpg",
    },
  ];

  const automationCardTemp = $("automation-card-temp");

  const autoMationFragMent = document.createDocumentFragment();
  const autoMationHomFragMent = document.createDocumentFragment();

  const generateAutomationSlide = ({ text, imageSrc, where }) => {
    // swiper-slide
    const slide = document.createElement("div");
    slide.setAttribute("class", "swiper-slide");
    slide.style = "width:fit-content;";
    // clone template
    const AutomationCard = automationCardTemp.content.cloneNode(true);
    AutomationCard.querySelector("#line-1").innerHTML = text;
    AutomationCard.querySelector("#line-2").innerHTML = where;
    AutomationCard.querySelector("#image").src = imageSrc;
    // append template
    slide.appendChild(AutomationCard);
    return slide;
  };
  automationsData.forEach(({ imageSrc, text, where }) => {
    autoMationFragMent.append(
      generateAutomationSlide({ imageSrc, text, where })
    );
  });
  automationsHomeData.forEach(({ imageSrc, text, where }) => {
    autoMationHomFragMent.append(
      generateAutomationSlide({ imageSrc, text, where })
    );
  });
  $("automation-amusment-home-swiper").appendChild(autoMationHomFragMent);
  $("automation-amusment-swiper").appendChild(autoMationFragMent);
}
