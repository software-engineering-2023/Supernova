function openContainer(event, containerId) {
    var containers = document.getElementsByClassName("container");
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.display = "none";
    }
    var container = document.getElementById(containerId);
    container.style.display = "block";
  }
  