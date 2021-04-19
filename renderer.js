// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const chat = document.getElementById("chat_window");
chat.scrollTop = chat.scrollHeight;

const remote = require('electron').remote;

document.getElementById("btn-min").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.minimize();
});

document.getElementById("btn-max").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
});

document.getElementById("btn-close").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  console.log("Hello")
  window.close();
});