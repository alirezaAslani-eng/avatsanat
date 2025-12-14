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
    { text: "هوشمندسازی شهربازی ملک شهر اصفهان", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی مجموعه تفریحی ماه شهر نور", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی شهربازی آمازون پلازا کرمانشاه", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی شهربازی سمین پارک شهریار", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی پارک ساحلی خمینی شهر", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی شهربازی هایپرمی اصفهان", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی شهربازی دهکده ساحلی چادگان", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی پارک مدنی کاشان", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی پارک پیروزی خمینی شهر", imageSrc: "images/pirozy.jfif" },
    { text: "هوشمندسازی آبشار اصفهان", imageSrc: "images/abshar.png" },
    { text: "هوشمندسازی پل تمدن اصفهان", imageSrc: "images/tamadoon.jpg" },
    { text: "هوشمندسازی پارک بادی سپاهان شهر", imageSrc: "images/sepahanShahr.jpg" },
    { text: "هوشمندسازی بوستان مادر شاهین شهر", imageSrc: "images/shahinShahr.webp" },
    { text: "هوشمندسازی شهربازی قلعه شادی گز و برخوار", imageSrc: "images/gazBarkhovar.webp" },
    { text: "هوشمندسازی سرارود مبارکه", imageSrc: "images/saraRod.png" },
    { text: "هوشمندسازی استارمال اهواز", imageSrc: "images/starmal.png" },
    { text: "هوشمندسازی اکتیویت گیم سنتر اصفهان", imageSrc: "images/activGame.jpg" },
    { text: "هوشمندسازی بهارستان اصفهان", imageSrc: "images/baharestan.jpg" },
    { text: "هوشمندسازی متاورس اراک", imageSrc: "images/parking.jpg" },
    { text: "هوشمندسازی شهربازی برج مروارید مشهد", imageSrc: "images/malakShahr.jpg" },

  ]
  const automationsHomeData = [
    { text: "هوشمندسازی خانه بازی سرزمین آکا اصفهان", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی خانه بازی کیندرلند مشهد", imageSrc: "images/malakShahr.jpg" },
    { text: "هوشمندسازی خانه بازی شادسر رامسر", imageSrc: "images/malakShahr.jpg" },
  ]
  const automationCardTemp = $("automation-card-temp")

  const autoMationFragMent = document.createDocumentFragment()
  const autoMationHomFragMent = document.createDocumentFragment()

  const generateAutomationSlide = ({ text, imageSrc }) => {
    // swiper-slide 
    const slide = document.createElement("div")
    slide.setAttribute("class", "swiper-slide")
    slide.style = "width:fit-content;"
    // clone template
    const AutomationCard = automationCardTemp.content.cloneNode(true)
    AutomationCard.querySelector("#centeral-text").innerHTML = text
    AutomationCard.querySelector("#image").src = imageSrc
    // append template 
    slide.appendChild(AutomationCard)
    return slide
  }
  automationsData.forEach(({ imageSrc, text }) => {
    autoMationFragMent.append(generateAutomationSlide({ imageSrc, text }))
  })
  automationsHomeData.forEach(({ imageSrc, text }) => {
    autoMationHomFragMent.append(generateAutomationSlide({ imageSrc, text }))
  })
  $("automation-amusment-home-swiper").appendChild(autoMationHomFragMent)
  $("automation-amusment-swiper").appendChild(autoMationFragMent)
}
