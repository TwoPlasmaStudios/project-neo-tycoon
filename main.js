const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      // Modül yüklemeleri ve harici kaynaklar (CDN) için gerekli ayarlar
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false // Geliştirme aşamasında CORS sorunlarını aşmak için
    }
  });

  win.loadFile('index.html'); // Tek parça dosyanı yükler
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});