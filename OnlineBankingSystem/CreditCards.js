function myFunction(id) {
    document.getElementById("dropdown"+id).classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
  function showTextbox() {
    var textbox = document.getElementById("textbox");
    textbox.classList.remove("hidden");
  }
  
  function hideTextbox() {
    var textbox = document.getElementById("textbox");
    textbox.classList.add("hidden");
  }
  function displayText() {
    var box = document.getElementById("box");
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  }
    
  