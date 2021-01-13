(function() {
  function recal() {
    var docElement = document.documentElement || document.body;
    var clientWidth = docElement.clientWidth,
      designWidth = 1200;
    if (clientWidth < 700) {
      designWidth = 420;
    } else if (clientWidth < designWidth) {
      if (clientWidth < 1200) {
        clientWidth = 1200;
      } else {
        clientWidth -= 80;
      }
    } else {
      clientWidth = designWidth;
    }
    docElement.style.fontSize = (clientWidth / designWidth) * 16 + "px";
    docElement.style.display = "block";
  }
  window.addEventListener("resize", recal);
  recal();
})();
