// Booting animation
function startBootAnimation() {
  setTimeout(function() {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
    setInterval(updateTime, 1000); // Update time every second
  }, 3000);
}

// Update Time on Taskbar
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  document.getElementById('time').textContent = timeString;
}

// Toggle App Drawer
function toggleAppDrawer() {
  const drawer = document.getElementById('app-drawer');
  drawer.style.display = (drawer.style.display === 'none' || drawer.style.display === '') ? 'flex' : 'none';
}

// Launch an App
function launchApp(appName) {
  const appWindow = document.getElementById(appName);
  appWindow.style.display = 'block';
  appWindow.style.width = '100vw'; // Make app full-screen
  appWindow.style.height = '100vh'; // Make app full-screen
  document.getElementById('home-screen').style.display = 'none'; // Hide home screen
}

// Close an App
function closeApp(appName) {
  const appWindow = document.getElementById(appName);
  appWindow.style.display = 'none';
  document.getElementById('home-screen').style.display = 'flex'; // Show home screen again
}

// Change Wallpaper
function changeWallpaper(wallpaper) {
  document.body.style.background = wallpaper;
}