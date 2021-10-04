function displayDate() {
    document.getElementById("date").innerHTML = Date();
  }

  function checkCookies() {
    var text = "";
  
    if (navigator.cookieEnabled == true) {
      text = "On page load your Cookies were enabled.";
    } else {
       text = "Cookies are not enabled.";
    }
    document.getElementById("cookies").innerHTML = text;
  }
