const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow(
    {
      width: 1280,
      height: 720,
      minWidth: 1280,
      resizable: true,
      frame: true,
      autoHideMenuBar: true
    });

    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }));

    // win.webContents.openDevTools();

    win.on('closed', () => {
      win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

function drawShit(){
  var dataArray = [1, 2, 3];
  for (var i = 0; i < dataArray.length; i++) {
    document.write(dataArray[i]);
  }
}

function extender(){
  dataArray.push(dataArray[dataArray.length-1] +1);
  drawShit();
}
// modal
