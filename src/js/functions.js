export function isWebp() {
  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Johnrogershousemay2020.webp";
  }

  testWebp(function (sup) {
    let className = sup == true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}
