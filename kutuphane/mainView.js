var UstMenuYukariAnimasyon = document.getElementById("UstMenu");
UstMenuYukariAnimasyon.style.animation = "none"; // Animasyonu sıfırla

var kitapEkleAfisAnimasyon = document.getElementById("KitapEkleAfis");
kitapEkleAfisAnimasyon.style.animation = "none"; // Animasyonu sıfırla

function bekle(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function GizleGoster(showId, hideId1, hideId2, hideId3, hideId4) {
 // Elementi seç
var Gizlenecek1 = document.getElementById(hideId1);
var Gizlenecek2 = document.getElementById(hideId2);
var Gizlenecek3 = document.getElementById(hideId3);
var Gizlenecek4 = document.getElementById(hideId4);
var Gosterilecek = document.getElementById(showId);
var GosterilmeDurumu = window.getComputedStyle(Gosterilecek, null).getPropertyValue('display');

if (GosterilmeDurumu === 'block') {
} else {

Gizlenecek1.style.top = '59px';
Gizlenecek1.style.opacity = '100%';

Gizlenecek2.style.top = '59px';
Gizlenecek2.style.opacity = '100%';

Gizlenecek3.style.top = '59px';
Gizlenecek3.style.opacity = '100%';

Gizlenecek4.style.top = '59px';
Gizlenecek4.style.opacity = '100%';

document.documentElement.style.setProperty('--temel-ogeler-animasyon', 'TemelSayfalarAsagi');

Gizlenecek1.style.animation = null; // Animasyonu tekrar etkinleştir
Gizlenecek2.style.animation = null; // Animasyonu tekrar etkinleştir
Gizlenecek3.style.animation = null; // Animasyonu tekrar etkinleştir
Gizlenecek4.style.animation = null; // Animasyonu tekrar etkinleştir

// 400 milisaniye bekleyip sonra ikinci işlem
await bekle(400);

Gosterilecek.style.display = 'block';
Gizlenecek1.style.display = 'none';
Gizlenecek2.style.display = 'none';
Gizlenecek3.style.display = 'none';
Gizlenecek4.style.display = 'none';

Gosterilecek.style.top = '100%';
Gosterilecek.style.opacity = '0%';
document.documentElement.style.setProperty('--temel-ogeler-animasyon', 'TemelSayfalarYukari');
Gosterilecek.style.animation = null;
}
}

async function kitapEkleEkraninaGit() {
  var Ayarlar = document.getElementById("Ayarlar");
  var UstMenu = document.getElementById("UstMenu");
  var KitapEkleAfis = document.getElementById("KitapEkleAfis");
  var KitapEkleForm = document.getElementById("kitapEkleForm");
	
  void UstMenu.offsetWidth; // Reflow'u tetikle
  UstMenu.style.animation = null; // Animasyonu tekrar etkinleştir
  
  Ayarlar.style.top = '59px';
  Ayarlar.style.opacity = '100%';
  
  document.documentElement.style.setProperty('--temel-ogeler-animasyon', 'OpakligiAzalt');
  
  void Ayarlar.offsetWidth; // Reflow'u tetikle
  Ayarlar.style.animation = null; // Animasyonu tekrar etkinleştir
  
  // 700 milisaniye bekleyip sonra ikinci işlem
  await bekle(700);
  
  Ayarlar.style.animation = "none"; // Animasyonu sıfırla
  UstMenu.style.animation = "none"; // Animasyonu sıfırla
  
  Ayarlar.style.display = 'none';
  UstMenu.style.display = 'none';
  KitapEkleAfis.style.display = 'flex';
  KitapEkleForm.style.display = 'block';
  
  
  void KitapEkleAfis.offsetWidth; // Reflow'u tetikle
  KitapEkleAfis.style.animation = null; // Animasyonu tekrar etkinleştir
  
  // 700 milisaniye bekleyip sonra üçüncü işlem
  await bekle(700);
  KitapEkleAfis.style.opacity = '100%';
  KitapEkleAfis.style.top = '0px';
  
  KitapEkleAfis.style.animation = "none"; // Animasyonu sıfırla
  UstMenu.style.animation = "none"; // Animasyonu sıfırla
  
  KitapEkleForm.style.opacity = '100%';
}
 
async function kitapEkleEkranindanCik() {
  var Ayarlar = document.getElementById("Ayarlar");
  var UstMenu = document.getElementById("UstMenu");
  var KitapEkleAfis = document.getElementById("KitapEkleAfis");
  var KitapEkleForm = document.getElementById("kitapEkleForm");
  
  document.documentElement.style.setProperty('--kitap-ekle-afis-animasyon', 'KitapEkleBaslikYukari');
  document.documentElement.style.setProperty('--kitap-ekle-form-animasyon', 'OpakligiAzalt');
  
  void KitapEkleAfis.offsetWidth; // Reflow'u tetikle
  KitapEkleAfis.style.animation = null; // Animasyonu tekrar etkinleştir

  void KitapEkleForm.offsetWidth; // Reflow'u tetikle
  KitapEkleForm.style.animation = null; // Animasyonu tekrar etkinleştir
  
  await bekle(700);
  Ayarlar.style.display = 'block';
  UstMenu.style.display = 'flex';
  KitapEkleAfis.style.display = 'none';
  KitapEkleForm.style.display = 'none';
  
  document.documentElement.style.setProperty('--temel-ogeler-animasyon', 'OpakligiArtir');
  document.documentElement.style.setProperty('--ust-menu-animasyon', 'UstMenuAsagi');
  
  Ayarlar.style.opacity = '0%';
  UstMenu.style.top = '-59px';
  UstMenu.style.opacity = '0%';
  
  void Ayarlar.offsetWidth; // Reflow'u tetikle
  Ayarlar.style.animation = null; // Animasyonu tekrar etkinleştir

  void UstMenu.offsetWidth; // Reflow'u tetikle
  UstMenu.style.animation = null; // Animasyonu tekrar etkinleştir
  
  await bekle(700); 
  document.documentElement.style.setProperty('--ust-menu-animasyon', 'UstMenuYukari');
  document.documentElement.style.setProperty('--kitap-ekle-afis-animasyon', 'KitapEkleBaslikAsagi');
  document.documentElement.style.setProperty('--kitap-ekle-form-animasyon', 'OpakligiArtir');
  document.documentElement.style.setProperty('--temel-ogeler-animasyon', 'TemelSayfalarYukari');
  
  Ayarlar.style.opacity = '0%';
  UstMenu.style.top = '0px';
  UstMenu.style.opacity = '100%';
  KitapEkleAfis.style.opacity = '0%';
  KitapEkleAfis.style.top = '-100px';
  KitapEkleForm.style.opacity = '0%';
  
  UstMenu.style.animation = "none"; // Animasyonu sıfırla
  Ayarlar.style.animationDuration = "0s";
}

function OduncDegerinikontrolEt() {
    var OduncAlmaSuresi = document.getElementById("VarsayilanSure");
    var deger = OduncAlmaSuresi.value;

    if (deger < 1) {
        OduncAlmaSuresi.value = 1; // 0'dan küçükse değeri sıfıra çevir
    }
}

var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  var weekday = [
        "Pazar",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
        "Pazartesi"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);

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
