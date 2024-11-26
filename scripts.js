// Boot animation & startup
function startBootAnimation() {
  setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
  }, 4000); // Time to show the boot screen
}

// Time Widget Update
function updateTime() {
  const timeElement = document.getElementById('current-time');
  const dateElement = document.getElementById('current-date');
  
  const now = new Date();
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = now.toLocaleDateString();
  
  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

// Call updateTime every second
setInterval(updateTime, 1000);

// App Drawer Toggle
function toggleAppDrawer() {
  const drawer = document.getElementById('app-drawer');
  drawer.style.display = drawer.style.display === 'none' ? 'flex' : 'none';
}

// Launching Apps
function launchApp(appName) {
  const appWindow = document.getElementById(appName);
  appWindow.style.display = 'block';
  document.getElementById('home-screen').style.display = 'none';
}

// Closing Apps
function closeApp(appName) {
  const appWindow = document.getElementById(appName);
  appWindow.style.display = 'none';
  document.getElementById('home-screen').style.display = 'block';
}

// Adding Assignment
function addAssignment() {
  const assignmentInput = document.getElementById('new-assignment');
  const assignmentsList = document.getElementById('assignments');
  
  const newAssignment = document.createElement('li');
  newAssignment.textContent = assignmentInput.value;
  assignmentsList.appendChild(newAssignment);
  
  assignmentInput.value = ''; // Clear the input
}

// Change Wallpaper
function changeWallpaper(style) {
  document.body.style.background = style;
}