

class GitHub {
  constructor() {
    this.client_id = '82a9f34709107b549ecd';
    this.client_secret = '44b1767f7f221f185e424421da7d9b22c54b5ed8';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    console.log(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    
    const profileData = await profileResponse.json();

    const reposData = await reposResponse.json();
    console.log(reposResponse);

    return {
      profileData, 
      reposData
    }
  }
}