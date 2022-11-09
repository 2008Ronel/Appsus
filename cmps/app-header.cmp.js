export default {
	template: `
        <header class="app-header">
            <h1>AppSus</h1>
            <nav>
                <div>
                <router-link to="/">Home</router-link> | 
                <router-link to="/about">About</router-link>
                </div>
                <div>
                <router-link to="/misterEmail"><button>MisterEmail</button></router-link>
                <router-link to="/missKeep"><button>MissKeep</button></router-link>
                </div>
            </nav>
        </header>
    `,
}
