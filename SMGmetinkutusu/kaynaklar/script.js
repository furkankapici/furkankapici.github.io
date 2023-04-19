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
document.getElementById("field1").selectionStart;
console.log(curPos);
let x = $("#field1").val();
let text_to_insert = $("#insert").val();
$("#field1").val(
x.slice(0, curPos) + text_to_insert + x.slice(curPos));
            }

 function satirkirmizi() {
 var curPos =
 document.getElementById("field1").selectionStart;
 console.log(curPos);
 let x = $("#field1").val();
 let text_to_insert = $("#insert2").val();
 $("#field1").val(
 x.slice(0, curPos) + text_to_insert + x.slice(curPos));
             }	  

	function satirayar() {
   var textbox = document.getElementById('field1');
   var paragraph = document.getElementById('field2');
   paragraph.textContent = textbox.value;
    }
 

	   