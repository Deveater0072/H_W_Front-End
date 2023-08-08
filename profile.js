const userContent = document.querySelector('.userContent');
const innerContent = document.querySelector('.innerContent');
const logoutButton = document.querySelector('.logout');

const loggedOut = true

if(loggedOut) {
  userContent.innerHTML = `<h3>Log in to see your profile</h3>`
  
} else {
  console.log("request");
}

logoutButton.addEventListener('click', () => { 
  logout()
})

function logout() { 
  window.location.href= "login.html"
}