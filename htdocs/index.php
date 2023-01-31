<!doctype html>
<html>
<head>
<style>
#chatContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  position: absolute;
}

#messages {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  border: 1px solid black;
}

#input {
  width: 80%;
  height: 20px;
  margin-bottom: 10px;
}

#submit {
  width: 20%;
  height: 30px;
}

#parent {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
    <script>
window.onload = function() {
  const chatContainer = document.getElementById("chatContainer");
  const messages = document.getElementById("messages");
  messages.scrollTop = messages.scrollHeight;
  const input = document.getElementById("input");
  const submit = document.getElementById("submit");

  input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      const message = input.value;
      messages.innerHTML += "<br>" + message;
      input.value = "";
    }
  });
  
submit.addEventListener("click", function() {
const message = input.value;
const newMessage = document.createElement("div");
newMessage.innerText = message;
messages.appendChild(newMessage);
input.value = "";
messages.scrollTop = messages.scrollHeight;
});
};

    </script>
</head>
<body>
<div id="chatContainer">
  <div id="messages"><br>ew<br><br>trfhddh<br>kc<br>h<br>fk<br>j<br>f<br>h<br>j<br>g<br>hk<br>ghk<br>y<br>tr<br>t<br>r<br>t<br>rt<br>rt<br>r<br>t<br>rt<br><br><br>r<br>t<br>rt<br><br>ret<br>et<br>r<br>e<br>tt<br>rt<br>rterrtiş<br>üerşydhptrkmyjptpxdkğ<br>jkyg<br>tcyğ<br>gklulğ<br>yulğ<br>ul<br>yulğ<br>yulo<br>ğyu<br>ayak yala himor</div>
  <input type="text" id="input">
  <button id="submit">Gönder</button>
</div>
</body>
</html>