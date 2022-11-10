export default {
    template: `
        <header class="app-header flex justify-between align-center">
            <div class="logo-container flex align-center"><img v-bind:src="headerImg" /> {{headerTxt}}</div> 
            <nav>
                <router-link to="/">Home</router-link> | 
                <router-link to="/about">About</router-link> |
                <router-link to="/mail">mail</router-link> |
                <router-link to="/keep">keep</router-link>
            </nav>
        </header>
    `,
    computed: {
        headerImg() {
            if(this.$route.fullPath==='/'||
            this.$route.fullPath==='/about')return '../assets/img/apsus-logo.jpg'
            if(this.$route.fullPath==='/mail')return '../assets/img/mail-logo.png'
            if(this.$route.fullPath==='/keep')return '../assets/img/keep-logo.png'
        },
        headerTxt() {
            if(this.$route.fullPath==='/') return 'Apsus'
            if(this.$route.fullPath==='/about')return 'About'
            if(this.$route.fullPath==='/mail')return 'Email'
            if(this.$route.fullPath==='/keep')return 'Keep'
        }
    },


}

