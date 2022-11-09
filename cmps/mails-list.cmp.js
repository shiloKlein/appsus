import {mailService} from '../services/mail-service.js'


export default {
    template: `
        <section class="mail-list">
            <ul>
                <li v-for="(mail,idx) in mails">{{txt+" "+idx+1}}</li>
                <li>{{txt}} 1</li>
                <li>{{txt}} 2</li>
                <li>{{txt}} 3</li>
                <li>{{txt}} 4</li>
                </ul>

           
        </section>
    `,

    created(){
        this.getMails()
    },

    data() {
        return {
            mails: [],
            txt: 'mail'

        }
    },
    methods: {

        getMails(){
        console.log('get mails');
        const a = mailService.query()
        .then(a=>console.log(a))

    },
    }


}
