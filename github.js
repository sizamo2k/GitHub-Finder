class Github {
    constructor(){
        this.client_id = 'b5a8b0392b144344e810';
        this.client_secret = 'd2998d3f000bdaa319997a74b1e9a5b214eda75f'
        this.repos_count = 5;
        this.repos_sort = `created; asc`;
    }

    async getUser(user) {
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