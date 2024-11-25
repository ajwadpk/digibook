let bootScreen = document.getElementById("boot-screen");
let homeScreen = document.getElementById("home-screen");

let assignments = [];

// Simulate Booting Process
function startBootAnimation() {
  setTimeout(() => {
    bootScreen.style.display = "none";
    homeScreen.style.display = "block";
    updateTime();
  }, 5000); // Show boot screen for 5 seconds
}

// Time Update (Displays current time on Taskbar)
function updateTime() {
  let timeElement = document.getElementById("time");
  setInterval(() => {
    let now = new Date();
    let time = now.toLocaleTimeString();
    timeElement.textContent = time;
  }, 1000);
}

// Toggle App Drawer
function toggleAppDrawer() {
  let appDrawer = document.getElementById("app-drawer");
  appDrawer.style.display = appDrawer.style.display === "none" ? "flex" : "none";
}

// Launch App Function
function launchApp(appId) {
  let app = document.getElementById(appId);
  if (app) {
    app.style.display = "block";
  }
}

// Close App Function
function closeApp(appId) {
  let app = document.getElementById(appId);
  if (app) {
    app.style.display = "none";
  }
}

// Change Wallpaper from Settings
function changeWallpaper(style) {
  document.body.style.background = style;
}

// Assignment Tracker Functions
function addAssignment() {
  let newAssignment = document.getElementById("new-assignment").value;
  if (newAssignment) {
    assignments.push(newAssignment);
    updateAssignmentsList();
    document.getElementById("new-assignment").value = ""; // Clear input
  }
}

function updateAssignmentsList() {
  let assignmentsList = document.getElementById("assignments");
  assignmentsList.innerHTML = "";
  assignments.forEach((assignment, index) => {
    let li = document.createElement("li");
    li.textContent = `${index + 1}. ${assignment}`;
    assignmentsList.appendChild(li);
  });
}