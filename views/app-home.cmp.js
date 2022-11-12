export default {
	template: `
        <section class="home-page flex flex-column align-center">
        <div class="logo-container"><img src="./assets/img/apsus-logo.jpg"></div>
            <h1>Appsus.</h1>

              <div class="home-nav flex align-center">

                  <div><router-link to="/about"><img src="./assets/img/about-icon.jpg" title="about"/></router-link></div>
                  <div><router-link to="/mail"><img src="./assets/img/gmail-logo.jpg" title="appsus mail"/></router-link></div>
                  <div><router-link to="/keep"><img src="./assets/img/keep-logo.png" title="appsus keep"/></router-link></div>
      
              </div>
            
        </section>
    `,
}
