const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value.trim();

	if(userText !== '') {
		github.getUsers(userText)
			.then(data => {
				if(data.profile.message === 'Not Found'){
					//Show Alert
					ui.showAlert('User not found','alert alert-danger');
				} else {
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			}).catch(err => console.log(err));
	} else {
		//clear profile
		ui.clearProfile();
	}
});