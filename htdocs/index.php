<!DOCTYPE html>
<html>
  <head>
  <script>
  document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Gönderilen mesajın işlemleri
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Gönderilen mesajın işlemleri
  });
});

  </script>
    <style>
	  form {
       position: fixed;
       bottom: 0;
       width: 100%;
       background-color: white;
      }

      textarea {
       width: 100%;
       height: 100px;
      }

      .chat-container {
        width: 80%;
        margin: auto;
        padding: 20px;
        background-color: #f2f2f2;
        border-radius: 10px;
        box-shadow: 2px 2px 5px #888888;
      }
      .chat-header {
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .chat-message {
        margin-bottom: 20px;
        padding: 10px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 1px 1px 2px #888888;
      }
      .message-header {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .message-body {
        font-size: 16px;
      }
	    form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    width: 100%;
    border-top: 1px solid #f2f2f2;
  }

  textarea {
    width: 80%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    resize: none;
  }

  button[type="submit"] {
    width: 20%;
    height: 100px;
    background-color: #f2f2f2;
    color: black;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
    </style>
  </head>
  <body>
    <div class="chat-container">
      <div class="chat-header">Sohbet Başlığı</div>
      <div class="chat-message">
        <div class="message-header">Kullanıcı Adı</div>
        <div class="message-body">Mesaj İçeriği</div>
      </div>
      <div class="chat-message">
        <div class="message-header">Kullanıcı Adı</div>
        <div class="message-body">Mesaj İçeriği</div>
      </div>
	  <div class="chat-message">
<form>
  <textarea></textarea>
  <button type="submit">Gönder</button>
</form>
</div>
    </div>
  </body>
</html>
