function copyToClipboard(id) {
var from = document.getElementById(id);
var range = document.createRange();
window.getSelection().removeAllRanges();
range.selectNode(from);
window.getSelection().addRange(range);
document.execCommand('copy');
window.getSelection().removeAllRanges();	 
      }
      
function show(shown, hidden) {
document.getElementById(shown).style.display='block';
document.getElementById(hidden).style.display='none';
return false;
   }

function satirsiyah() {
var curPos =
document.getElementById("htmlmetin").selectionStart;
console.log(curPos);
let x = $("#htmlmetin").val();
let text_to_insert = $("#insert").val();
$("#htmlmetin").val(
x.slice(0, curPos) + text_to_insert + x.slice(curPos));
            }

 function satirkirmizi() {
 var curPos =
 document.getElementById("htmlmetin").selectionStart;
 console.log(curPos);
 let x = $("#htmlmetin").val();
 let text_to_insert = $("#insert2").val();
 $("#htmlmetin").val(
 x.slice(0, curPos) + text_to_insert + x.slice(curPos));
             }	  

	function satirayar() {
var metinKutusu = document.getElementById("htmlmetin"); // metin kutusu elemanını al
var sonucKutusu = document.getElementById("sorujs"); // sonuç kutusu elemanını al
var htmlKod = metinKutusu.value; // metin kutusundaki HTML kodunu al
sonucKutusu.innerHTML = htmlKod; // HTML kodunu işle ve sonuç kutusuna yaz
}

function donustur() {
  // Metin kutusundan metni al
  var metin = document.getElementById("htmlmetin").value;

  // <a> etiketlerini <font> etiketlerine dönüştür
  var yeniMetin = metin.replace(/<a style='color: red;'>/g, '<font color="red"/>').replace(/<\/a>/g, "").replace(/<a style='color: black;'>/g, '<font color="black"/>').replace(/<\/a>/g, "");

  // Sonucu yeni bir metin kutusuna yaz
  document.getElementById("sonucKutusu").value = yeniMetin;
}
