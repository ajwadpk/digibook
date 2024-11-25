// Boot Animation
function startBootAnimation() {
  setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
  }, 3000);
}

// Toggle App Drawer
function toggleAppDrawer() {
  const drawer = document.getElementById('app-drawer');
  drawer.style.display = drawer.style.display === 'none' ? 'flex' : 'none';
}

// Launch App
function launchApp(id) {
  document.getElementById(id).style.display = 'flex';
  toggleAppDrawer();
}

// Close App
function closeApp(id) {
  document.getElementById(id).style.display = 'none';
}

// Add Assignment to Tracker
function addAssignment() {
  const assignmentInput = document.getElementById('new-assignment');
  const assignmentList = document.getElementById('assignments');
  const assignmentText = assignmentInput.value.trim();

  if (assignmentText) {
    const newAssignment = document.createElement('li');
    newAssignment.textContent = assignmentText;
    assignmentList.appendChild(newAssignment);
