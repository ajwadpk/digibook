// Boot screen and home screen visibility
const bootScreen = document.getElementById("boot-screen");
const homeScreen = document.getElementById("home-screen");

// Boot animation when the page loads
function startBootAnimation() {
  setTimeout(() => {
    bootScreen.style.display = "none"; // Hide boot screen
    homeScreen.style.display = "block"; // Show home screen
    updateTime(); // Start updating the time on taskbar
  }, 5000); // Boot screen is shown for 5 seconds
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

// Toggle App Drawer visibility
function toggleAppDrawer() {
  let appDrawer = document.getElementById("app-drawer");
  appDrawer.style.display = appDrawer.style.display === "none" ? "flex" : "none";
}

// Launch App function
function launchApp(appId) {
  let app = document.getElementById(appId);
  let taskbar = document.getElementById("taskbar");
  let appDrawer = document.getElementById("app-drawer");

  if (app) {
    // Hide taskbar when app is opened
    taskbar.style.display = "none";
    // Close app drawer if open
    appDrawer.style.display = "none";
    // Open the app window in full-screen mode
    app.style.display = "flex";
  }
}

// Close App and Show Taskbar Again
function closeApp(appId) {
  let app = document.getElementById(appId);
  let taskbar = document.getElementById("taskbar");

  if (app) {
    // Close the app window
    app.style.display = "none";
    // Show taskbar again
    taskbar.style.display = "flex";
  }
}

// Change Wallpaper from Settings
function changeWallpaper(style) {
  document.body.style.background = style;
}

// Assignment Tracker Functions
let assignments = [];

// Add new assignment to the list
function addAssignment() {
  let newAssignment = document.getElementById("new-assignment").value;
  if (newAssignment) {
    assignments.push(newAssignment);
    updateAssignmentsList();
    document.getElementById("new-assignment").value = ""; // Clear input
  }
}

// Update the assignments list in the tracker
function updateAssignmentsList() {
  let assignmentsList = document.getElementById("assignments");
  assignmentsList.innerHTML = ""; // Clear the list

  assignments.forEach((assignment, index) => {
    let li = document.createElement("li");
    li.textContent = `${index + 1}. ${assignment}`;
    assignmentsList.appendChild(li);
  });
}

// Handle app drawer items
const appIcons = document.querySelectorAll(".app-icon");
appIcons.forEach(icon => {
  icon.addEventListener("click", function() {
    let appId = icon.getAttribute("onclick").match(/'([^']+)'/)[1];
    launchApp(appId);
  });
});

// Handle the "X" button to close the app
const closeButtons = document.querySelectorAll(".window-header button");
closeButtons.forEach(button => {
  button.addEventListener("click", function() {
    let appId = button.closest(".app-window").id;
    closeApp(appId);
  });
});