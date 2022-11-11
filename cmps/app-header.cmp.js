export default {
    template: `
        <header class="app-header flex justify-between align-center">
        <div class="main-screen" :class="{menu_open:isMenuClicked}" @click="toggleMenu()"></div>
            <div class="logo-container flex align-center"><img v-bind:src="headerImg" /> {{headerTxt}}</div> 
            <button class="btn-menu" @click="toggleMenu()"><img src="./assets/img/apps_icon.png"/></button>
            <nav>
                <ul  class="drop-down flex align-center" :class="{clicked:isMenuClicked}">
                    <li><router-link to="/"><img src="./assets/img/home-icon.jpg"/></router-link></li>
                    <li><router-link to="/about"><img src="./assets/img/about-icon.jpg"/></router-link></li>
                    <li><router-link to="/mail"><img src="./assets/img/gmail-logo.jpg"/></router-link></li>
                    <li><router-link to="/keep"><img src="./assets/img/keep-logo.png"/></router-link></li>
                </ul> 
            </nav>
        </header>
    `,
    data() {
        return {
            isMenuClicked: false,
        }
    },

    methods: {
        toggleMenu() {
            this.isMenuClicked = !this.isMenuClicked

        },
    },
    computed: {
        headerImg() {
            console.log(this.$route.fullPath.split('/')[2] === 'details');
            if (this.$route.fullPath === '/' ||
                this.$route.fullPath === '/about') return '../assets/img/apsus-logo.jpg'
            if (this.$route.fullPath.split('/')[1] === 'mail') return '../assets/img/gmail-logo.jpg'
            if (this.$route.fullPath === '/keep') return '../assets/img/keep-logo.PNG'
        },
        headerTxt() {
            if (this.$route.fullPath === '/') return 'Apsus'
            if (this.$route.fullPath === '/about') return 'About'
            if (this.$route.fullPath.split('/')[1] === 'mail') return 'Email'
            if (this.$route.fullPath === '/keep') return 'Keep'
        }
    },


}

