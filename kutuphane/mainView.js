function saveJsonFile() {
  let fname = document.getElementsByName("fname")[0].value;
  let city = document.getElementsByName("city")[0].value;
  let site = document.getElementsByName("site")[0].value;
  let car = document.getElementsByName("car")[0].value;
  let song = document.getElementsByName("song")[0].value;
  let mobile = document.getElementsByName("mobile")[0].value;

  console.log(fname);
  console.log(city);
  console.log(site);
  console.log(car);
  console.log(song);
  console.log(mobile);

  window.Bridge.saveData(fname, city, site, car, song, mobile);
}

function bekle(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function GizleGoster(showId, hideId1, hideId2, hideId3) {
 // Elementi seç
var Gizlenecek1 = document.getElementById(hideId1);
var Gizlenecek2 = document.getElementById(hideId2);
var Gizlenecek3 = document.getElementById(hideId3);
var Gosterilecek = document.getElementById(showId);

Gizlenecek1.classList.remove("temelogeler"); // Eski class'ı kaldır
Gizlenecek1.classList.add("temelogelerasagi"); // Yeni class'ı ekle

Gizlenecek2.classList.remove("temelogeler"); // Eski class'ı kaldır
Gizlenecek2.classList.add("temelogelerasagi"); // Yeni class'ı ekle

Gizlenecek3.classList.remove("temelogeler"); // Eski class'ı kaldır
Gizlenecek3.classList.add("temelogelerasagi"); // Yeni class'ı ekle

// 400 milisaniye bekleyip sonra ikinci işlem
await bekle(400);

 Gosterilecek.style.display = 'block';
 Gizlenecek1.style.display = 'none';
 Gizlenecek2.style.display = 'none';
 Gizlenecek3.style.display = 'none';
 
 Gizlenecek1.classList.remove("temelogelerasagi"); // Eski class'ı kaldır
 Gizlenecek1.classList.add("temelogeler"); // Yeni class'ı ekle

 Gizlenecek2.classList.remove("temelogelerasagi"); // Eski class'ı kaldır
 Gizlenecek2.classList.add("temelogeler"); // Yeni class'ı ekle

 Gizlenecek3.classList.remove("temelogelerasagi"); // Eski class'ı kaldır
 Gizlenecek3.classList.add("temelogeler"); // Yeni class'ı ekle
}








var kitapEkleAfisAnimasyon = document.getElementById("KitapEkleAfis");
kitapEkleAfisAnimasyon.style.animation = "none"; // Animasyonu sıfırla

var UstMenuYukariAnimasyon = document.getElementById("UstMenu");
UstMenuYukariAnimasyon.style.animation = "none"; // Animasyonu sıfırla

var AyarlarAnimasyon = document.getElementById("Ayarlar2");
AyarlarAnimasyon.style.animation = "none"; // Animasyonu sıfırla

function bekle(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function kitapEkleEkraninaGit() {
  void UstMenuYukariAnimasyon.offsetWidth; // Reflow'u tetikle
  UstMenuYukariAnimasyon.style.animation = null; // Animasyonu tekrar etkinleştir
  
  document.getElementById("UstMenu").style.display = 'none';
  
  var AyarlarAnimasyon = document.getElementById("UstMenu");
  void AyarlarAnimasyon.offsetWidth; // Reflow'u tetikle
  AyarlarAnimasyon.style.animation = null; // Animasyonu tekrar etkinleştir
  
  // 700 milisaniye bekleyip sonra ikinci işlem
  await bekle(700);

  document.getElementById("Ayarlar").style.display = 'none';
  document.getElementById("KitapEkleAfis").style.display = 'flex';
  
  var kitapEkleAfisAnimasyon = document.getElementById("KitapEkleAfis");
  void kitapEkleAfisAnimasyon.offsetWidth; // Reflow'u tetikle
  kitapEkleAfisAnimasyon.style.animation = null; // Animasyonu tekrar etkinleştir
  
  document.getElementById("KitapEkle").style.display = 'block';
}
  

  
