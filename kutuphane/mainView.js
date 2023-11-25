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

function GizleGoster(showId, hideId1, hideId2, hideId3) {
 document.getElementById(showId).style.display = 'block';
 document.getElementById(hideId1).style.display = 'none';
 document.getElementById(hideId2).style.display = 'none';
 document.getElementById(hideId3).style.display = 'none';
}

var kitapEkleAnimasyon = document.getElementById("KitapEkleAfis");
kitapEkleAnimasyon.style.animation = "none"; // Animasyonu sıfırla

function kitapEkleEkraninaGit() {
  document.getElementById("UstMenu").style.display = 'none';
  document.getElementById("Ayarlar").style.display = 'none';
  document.getElementById("KitapEkle").style.display = 'block';
  document.getElementById("KitapEkleAfis").style.display = 'flex';
  var kitapEkleAnimasyon = document.getElementById("KitapEkleAfis");
  kitapEkleAnimasyon.style.animation = "none"; // Animasyonu sıfırla
  void kitapEkleAnimasyon.offsetWidth; // Reflow'u tetikle
  kitapEkleAnimasyon.style.animation = null; // Animasyonu tekrar etkinleştir
}
