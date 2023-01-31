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