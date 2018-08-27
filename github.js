class Github{

	constructor() {
		this.client_id = '9921b0af59514af91528';
		this.client_secret = 'f28c0c8f8ad9328922bdfe8c30d2226f79b40fbc';
		this.repos_count = 5;
		this.repos_sort = 'created: asc'; 
	}

	async getUsers(user) {
		
		//mine => https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}
		//https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos
		}		
	}
}