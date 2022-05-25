//
const color={
  green:"green",
  oorange:"orange",
  red:"red",
  yellow:"yellow",
  SlateBlue:"SlateBlue",
  dod:"DodgerBlue"
}
const colorValue=Object.values(color);
const mainContainer=document.getElementById("container");

setInterval(()=>{
  const randomColor= getRndInteger(0,colorValue.length-1);
  mainContainer.style.background=colorValue[randomColor];

},3000)

//

// const content={
//   lo:"lpo",
//   lg:"lpg",
//   lp:"lpp",
//   lf:"lpf",
//   le:"lpe",
//   lh:"lph",
//   la:"lpa",
//   lb:"lpb"
// }
//  const objectValue= Object.values(content);
// const listOffer=document.getElementById("list-product-offer");
// setInterval(() => {
//     const randomIndex = getRndInteger(0, objectValue.length - 1);
//     listOffer.innerHTML = objectValue[randomIndex];

//   }, 2000);


  
//
const img = document.getElementById("changeImage");
const imgArray = ["slideimage/a.webp", "home/banner.jpg"];
setInterval(()=>{
  const randomIndex=getRndInteger(0,imgArray.length-1);
  img.src=imgArray[randomIndex];
},3000)








// const lpo = document.getElementById("list-product-offer");
// const lpg = document.getElementById("list-product-grocery");
// const lpp = document.getElementById("list-product-phone");
// const lpf = document.getElementById("list-product-fashion");
// const lpe = document.getElementById("list-product-electronic");
// const lph = document.getElementById("list-product-home");
// const lpa = document.getElementById("list-product-appliances");
// const lpb = document.getElementById("list-product-beauty");
// const listArray = [lpo, lpg, lpp, lpf, lpe, lph, lpa, lpb];

// const changeList = document.getElementsByClassName("listProduct");

// setInterval(() => {
//   const randomIndex = getRndInteger(0, listArray.length - 1);
//   //console.log(RandomIndex)
//   changeList.innerHTML = listArray[randomIndex].innerHTML;
//   //console.log(changeList)
// }, 2000);
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

//



//
const wearsText = document.getElementById("wears-text");
// setInterval(() => {
//   wearsText.innerHTML = `<p> Top Categories For you </p>
// <img src="wear/men/heawk.jpg" width="275px" alt="">
// <img src="wear/men/04d62_512.jpg" width="275px"  alt=""px>
// <img src="wear/men/ky5fp_512.jpg" width="275px"  alt="">
// <img src="wear/men/z0lfg_512.jpg" width="275px"  alt="">`;
// }, 3000);

const wearsImageArray = [
  `
  <p> Top Categories For You</p>
  <img src="wear/men/heawk.jpg" width="275px" alt="">
  <img src="wear/men/04d62_512.jpg" width="275px"  alt="">
  <img src="wear/men/ky5fp_512.jpg" width="275px"  alt="">
  <img src="wear/men/z0lfg_512.jpg" width="275px"  alt="">`,
];

setInterval(() => {
  for (let x in wearsImageArray) {
    wearsText.innerHTML = wearsImageArray[x];
  }
  //console.log(typeof(wearsImageArray));
}, 5000);

//

const shop_Braclet = document.getElementById("shopBraclet");
const shop_Earphone = document.getElementById("shopEarphone");
const shop_Watch = document.getElementById("shopWatch");
const shop_goggles = document.getElementById("shopGoggles");
const sho_phone = document.getElementById("shopPhone");
const shop_Bag = document.getElementById("shopBag");
const shop_Shirt = document.getElementById("shopShirts");
const shop_Shoes = document.getElementById("shopShoes");

const arrayShop = [
  shop_Braclet,
  shop_Earphone,
  shop_Watch,
  shop_goggles,
  sho_phone,
  shop_Bag,
  shop_Shirt,
  shop_Shoes,
];
// setInterval(() => {
//   const randomIndex = getRndInteger(0, arrayShop.length - 1);
//   shop_Braclet.innerHTML = arrayShop[randomIndex].innerHTML;
// }, 2000);


// //
//----------------------------------------------------------------------------------
// Braclet 

const shopBraclet = document.getElementById("shop-bracelet");
const arrayShopBraclet = [
  "differentimages/bracelet/b1.jpg",
  "differentimages/bracelet/b2.jpg",
  "differentimages/bracelet/b3.jpg",
  "differentimages/bracelet/b4.jpg",
];
const arrayPriceBraclet=[150,345,385,400];
const arrayDiscount =["25% Off","15% Off","5% Off","35% Off"];

const priceBraclet =document.getElementById("price-braclet");
const discountBraclet =document.getElementById("discount-braclet");


setInterval(()=>{
  const randomIndexBraclet = getRndInteger(0, arrayShopBraclet.length - 1);
  shopBraclet.src = arrayShopBraclet[randomIndexBraclet];

  //const randompriceBraclet=getRndInteger(0,arrayPriceBraclet.length-1);
  // const randomValue =getRndInteger(0, arrayDiscount.length-1);

  // priceBraclet.innerHTML=arrayPriceBraclet[randomIndexBraclet];
  priceBraclet.innerHTML=`<p>&#x20B9 ${arrayPriceBraclet[randomIndexBraclet]}</P>`;
  discountBraclet.innerHTML=arrayDiscount[randomIndexBraclet];
},6000);

const textBraclet =document.getElementById("text-Braclet");
textBraclet.onmouseenter =mouseEnterBraclet;
function mouseEnterBraclet(){
  textBraclet.style.background="black";
  textBraclet.style.color="white";
}

//----------------------------------------------------------------------------------------
const shopEarphone = document.getElementById("shop-earphone");
const arrayShopEarphone = [
  "differentimages/earphone/e2.jpg",
  "differentimages/earphone/e1.jpg",
  "differentimages/earphone/e3.jpg",
  "differentimages/earphone/e4.jpg",
];
const arrayPriceEarphone=[600,755,585,900];
const arrayDiscountEarphone =["25% Off","15% Off","5% Off","35% Off"];


const priceEarphone=document.getElementById("price-earphone");
const discountEarphone =document.getElementById("discount-earphone");

setInterval(()=>{
  const randomIndexEarphone = getRndInteger(0, arrayShopEarphone.length - 1);
  shopEarphone.src = arrayShopEarphone[randomIndexEarphone];

  priceEarphone.innerHTML=`<p>&#x20B9 ${arrayPriceEarphone[randomIndexEarphone]}</p>`;
  discountEarphone.innerHTML=arrayDiscountEarphone[randomIndexEarphone];

},6000)

const textEarphone =document.getElementById("text-earphone");
textEarphone.onmouseenter=mouseEnterEarphone;
function mouseEnterEarphone(){
  textEarphone.style.background="black";
  textEarphone.style.color="white";
}

//------------------------------------------------------------------------
//watch

const shopWatch = document.getElementById("shop-watch");
const arrayShopWatch = [
  "differentimages/watch/w1.jpg",
  "differentimages/watch/w2.jpg",
  "differentimages/watch/w3.jpg",
  "differentimages/watch/w4.jpg",
];
const arrayPriceWatch=[150,345,385,400];
const arrayDiscountWatch =["25% Off","15% Off","5% Off","35% Off"];

const priceWatch =document.getElementById("price-watch");
const discountWatch=document.getElementById("discount-watch");

setInterval(()=>{
  const randomIndexWatch = getRndInteger(0, arrayShopWatch.length - 1);
  shopWatch.src = arrayShopWatch[randomIndexWatch];

  // priceWatch.innerHTML=arrayPriceWatch[randomIndexWatch];
  priceWatch.innerHTML=`<p> &#x20B9 ${arrayPriceWatch[randomIndexWatch]}`
  discountWatch.innerHTML=arrayDiscountWatch[randomIndexWatch];
},6000);
const textWatch = document.getElementById("text-Watch");
textWatch.onmouseenter =mouseenter;
function mouseenter(){
  textWatch.style.background="black";
  textWatch.style.color="white";
}

//-------------------------------------------------------------------------------
//goggle

const shopGoggles = document.getElementById("shop-google");
const arrayShopGoggles = [
  "differentimages/gog/g1.jpg",
  "differentimages/gog/g2.jpg",
  "differentimages/gog/g3.jpg",
  "differentimages/gog/g4.jpg",
];
const arrayPriceGoggles=[150,245,305,490];
const arrayDiscountGoggles =["25% Off","15% Off","5% Off","35% Off"];

const priceGoggle =document.getElementById("price-goggles");
const discountGoggle =document.getElementById("discount-goggles");


setInterval(()=>{
  const randomIndexGoggles = getRndInteger(0, arrayShopGoggles.length - 1);
  shopGoggles.src = arrayShopGoggles[randomIndexGoggles];

  // priceGoggle.innerHTML=arrayPriceGoggles[randomIndexGoggles];
  priceGoggle.innerHTML=`<p>&#x20B9 ${arrayPriceGoggles[randomIndexGoggles]}</P>`;
  discountGoggle.innerHTML=arrayDiscountGoggles[randomIndexGoggles];

},6000)

const textGoggle=document.getElementById("text-goggle");
textGoggle.onmouseenter=mouseEnterGoggle;
function mouseEnterGoggle(){
  textGoggle.style.background="black";
  textGoggle.style.color="white";
}

//------------------------------------------------
//phone
const shopPhone = document.getElementById("shop-phone");
const arrayShopPhone = [
  "differentimages/phone/p1.jpg",
  "differentimages/phone/p2.jpg",
  "differentimages/phone/p3.jpg",
  "differentimages/phone/p4.jpg",
];
const arrayPricePhone=["11,500","13,450","16,850","14,500"];
const arrayDiscountPhone =["25% Off","15% Off","5% Off","35% Off"];


const pricePhone= document.getElementById("price-phone");
const discountPhone =document.getElementById("discount-phone");

setInterval(()=>{

  const randomIndexPhone = getRndInteger(0, arrayShopPhone.length - 1);
  shopPhone.src = arrayShopPhone[randomIndexPhone];

  // pricePhone.innerHTML=arrayPricePhone[randomIndexPhone];
  pricePhone.innerHTML=`<p> &#x20B9 ${arrayPricePhone[randomIndexPhone]}`
  discountPhone.innerHTML=arrayDiscountPhone[randomIndexPhone];
},6000);

const textPhone=document.getElementById("text-phone");
textPhone.onmouseenter=mouseEnterPhone;
function mouseEnterPhone(){
  textPhone.style.background="black";
  textPhone.style.color="white";
}

//

//---------------------------------------------------------------------
//Bag
const shopBag = document.getElementById("shop-bag");
const arrayShopBag = [
  "differentimages/bag/b1.jpg",
  "differentimages/bag/b2.jpg",
  "differentimages/bag/b3.jpg",
  "differentimages/bag/b4.jpg",
];
const arrayPriceBag=[550,845,10885,900];
const arrayDiscountBag =["25% Off","15% Off","5% Off","35% Off"];

const priceBag =document.getElementById("price-bag");
const discountBag=document.getElementById("discount-bag");

setInterval(()=>{
  const randomIndexBag = getRndInteger(0, arrayShopBag.length - 1);
  shopBag.src = arrayShopBag[randomIndexBag];

  // priceBag.innerHTML=arrayPriceBag[randomIndexBag];
  priceBag.innerHTML=`<P> &#x20B9 ${arrayPricePhone[randomIndexBag]}`
  discountBag.innerHTML=arrayDiscountBag[randomIndexBag];

},6000);

const textBag=document.getElementById("text-bag");
textBag.onmouseenter=mouseEnterBag;
function mouseEnterBag(){
  textBag.style.color="white";
  textBag.style.background="black";
}



//------------------------------------
//shirt
// const shopShirt =document.getElementById("shop-shirts");
// const arrayshopShirts=[
//  "differentimages/shirt.jpg",
//  "wear/men/04d62_512.jpg",
//  "wear/men/ky5fp_512.jpg",
//  "wear/men/z0lfg_512.jpg"
// ];
// const arrayPriceShirt=[350,550,850,919];
// const arrayDiscountShirts=["25% Off","15% Off","5% Off","35% Off"];

// const priceShirt=document.getElementById("price-shirt");
// const discountShirt=document.getElementById("discount-shirt");

// setInterval(()=>{
//   const randomIndexShirt=getRndInteger(0,arrayshopShirts.length-1);
//   shopShirt.src=arrayshopShirts[randomIndexShirt];
// },6000)


//-------------------------------------------------------------------
//shoes
const shopShoes = document.getElementById("shop-shoes");
const arrayShopShoes = [
  "differentimages/shoes/s1.jpg",
  "differentimages/shoes/s2.jpg",
  "differentimages/shoes/s3.jpg",
  "differentimages/shoes/s4.jpg",
];
const arrayPriceShoes=[550,1345,885,700];
const arrayDiscountShoes =["25% Off","15% Off","5% Off","35% Off"];

const priceShoes=  document.getElementById("price-shoes");
const discountShoes= document.getElementById("discount-shoes");

setInterval(() => {
  const randomIndexShoes = getRndInteger(0, arrayShopShoes.length - 1);
  shopShoes.src = arrayShopShoes[randomIndexShoes];

  priceShoes.innerHTML=`<p>&#x20B9 ${arrayPriceShoes[randomIndexShoes]}</p>`;
  discountShoes.innerHTML=arrayDiscountShoes[randomIndexShoes];

  
}, 6000);

const textShoes=document.getElementById("text-shoes");
textShoes.onmouseenter=mouseEnterShoes;
function mouseEnterShoes(){
  textShoes.style.background="black";
  textShoes.style.color="white";
}












// setInterval(()=>{
//   const randompriceBraclet=getRndInteger(0,arrayPriceBraclet.length-1);
//   const randomValue =getRndInteger(0, arrayDiscount.length-1);
//   priceBraclet.innerHTML=arrayPriceBraclet[randompriceBraclet];
//   discountBraclet.innerHTML=arrayDiscount[randomValue];
  
//   discountWatch.innerHTML=arrayDiscount[randomValue];
//   discountEarphone.innerHTML=arrayDiscount[randomValue];
//   discountGoggle.innerHTML=arrayDiscount[randomValue];
//   discountPhone.innerHTML=arrayDiscount[randomValue];
//   discountBag.innerHTML=arrayDiscount[randomValue];
//   discountShirt.innerHTML=arrayDiscount[randomValue];
//   discountShoes.innerHTML=arrayDiscount[randomValue];

// },6000);





//
const shopGifts = document.getElementById("shop-gifts");
const shopAnimals = document.getElementById("shop-animals");
const shopKitch = document.getElementById("shop-kitch");
const shopBirth = document.getElementById("shop-birth");
const shopArray = [shopGifts, shopBirth, shopKitch, shopAnimals];
const changeShop = document.getElementsByClassName("storecontent");

shopGifts.onmouseenter=mouseEnter;

function mouseEnter(){
 shopGifts.style.background="rgb(255, 99, 71)";
}

shopAnimals.onmouseout=mouseOut;
function mouseOut(){
  shopAnimals.style.background="rgb(238, 130, 238)";
}
shopKitch.onmouseleave=mouseLeave;
function mouseLeave(){
  shopKitch.style.background="red"
}

shopBirth.onmouseup=mouseUp;
function mouseUp(){
  shopBirth.style.background="rgba(0, 128, 0, 0.3)";
}


const cookWare = document.getElementById("cook-ware");
const arrayImageCook = [
  "cookware/cookWare/cook.jpg",
  "cookware/cookWare/pigeon.jpg",
  "cookware/cookWare/prestige.jpg",
  "cookware/cookWare/cuttingedge.jpg",
];
const gasStoves = document.getElementById("gas-stoves");
const arrayImageGas = [
  "cookware/gasStoves/elica.jpg",
  "cookware/gasStoves//elica4.jpg",
  "cookware/gasStoves/hans.jpg",
  "cookware/gasStoves/one.jpg",
];

const kitchenStorage = document.getElementById("kitchen-storage");
const arrayImageKitchen = [
  "cookware/kitchenStorage/cello.jpg",
  "cookware/kitchenStorage/borosil.jpg",
  "cookware/kitchenStorage/milton.jpg",
  "cookware/kitchenStorage/oliver.jpg",
];

const tableWare = document.getElementById("table-ware");
const arrayImageTable = [
  "cookware/tableWare/awesome.jpg",
  "cookware/tableWare/fnp.webp",
  "cookware/tableWare/nescafe.jpg",
  "cookware/tableWare/Vkraft.jpg",
];

const shopDog = document.getElementById("shop-dog");
const arrayImageDog = [
  "shoppet/dogSupp/dryfood.jpg",
  "shoppet/dogSupp/pet.jpg",
  "shoppet/dogSupp/petparent.jpg",
];

const shopCat = document.getElementById("shop-cat");
const arrayImageCat = [
  "shoppet/cat/Cat_Beds.jpg",
  "shoppet/cat/Cat_Dry_Food.jpg",
  "shoppet/cat/wetfood.jpg",
];

const shopBirds = document.getElementById("shop-birds");
const arrayImageBirds = [
  "shoppet/birdssmall/birdfood.jpg",
  "shoppet/birdssmall/boltzpremium.jpg",
  "shoppet/birdssmall/livon.jpg",
];

const shopAquarium = document.getElementById("shop-aquarium");
const arrayImageAquarium = [
  "shoppet/aquariumacce/fishfood.jpg",
  "shoppet/aquariumacce/glassstone.jpg",
  "shoppet/aquariumacce/tetrabirs.jpg",
];
setInterval(() => {
  const randomIndex = getRndInteger(0, arrayImageCook.length - 1);
  cookWare.src = arrayImageCook[randomIndex];

  const randomGas = getRndInteger(0, arrayImageGas.length - 1);
  gasStoves.src = arrayImageGas[randomGas];

  const randomIndexKitchen = getRndInteger(0, arrayImageKitchen.length - 1);
  kitchenStorage.src = arrayImageKitchen[randomIndexKitchen];

  const randomIndexTable = getRndInteger(0, arrayImageTable.length - 1);
  tableWare.src = arrayImageTable[randomIndexTable];

  const randomIndexpet = getRndInteger(0, arrayImageDog.length - 1);
  shopDog.src = arrayImageDog[randomIndexpet];

  const randomIndexCat = getRndInteger(0, arrayImageCat.length - 1);
  shopCat.src = arrayImageCat[randomIndexCat];

  const randomIndexBirds = getRndInteger(0, arrayImageBirds.length - 1);
  shopBirds.src = arrayImageBirds[randomIndexBirds];
  const randomIndexAquarium = getRndInteger(0, arrayImageAquarium.length - 1);
  shopAquarium.src = arrayImageAquarium[randomIndexAquarium];
}, 3000);


//
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
