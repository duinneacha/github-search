// app.js


// Instantiate GitHub
const github = new GitHub;

// Instantiate UI
const ui = new UI;



// Search input
const searchUser = document.getElementById('searchUser');


// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  // Make sure user input is not blank
  if(userText !== '') {
    //console.log(userText);

    // Make HTTP Call
    github.getUser(userText)
      .then(data => {
        
        console.log(data);

        console.log(data.profileData);

        if(data.profileData.message === 'Not Found') {
          // Data Not Found Alert

          
          ui.showAlert('User Not Found','alert alert-danger');
          console.log('User Not Found on GitHub System');
        } else {

          console.log("AD");
          console.log(data);
          // Show Profile
          ui.showProfile(data.profileData);
          //console.log(data.repos);
          // Show Repos
          ui.showRepos(data.reposData);
          //console.log(data);

        }
        
      })
  } else {
    // Clear Profile
    ui.clearProfile();

  }
});



