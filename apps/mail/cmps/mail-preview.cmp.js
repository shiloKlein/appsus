// import { mailService } from "../services/mail-service"


export default {
    name: 'preview',
    props: ['mail'],
    template: `
        <section class="mail-preveiw flex align-center">
            <i class="fa-regular fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <!-- <router-link :to="'/mail/' + mail.id">for details > -->
                <div class="mail-address">{{mail.from}}</div>
                <div class="subject">{{mail.subject}}</div>
                <div class="short-content">{{mail.body}}</div>
                <button @click="deleteMail(mail.id)">X</button>
            <!-- </router-link> -->

        </section>
    `,

    data() {
        return {

        }
    },
    methods: {
        deleteMail(mailId){
            this.$emit('delete',mailId)
        }
    }
}