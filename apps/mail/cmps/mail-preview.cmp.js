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
                <!-- <div class="mail-date"> -->
                    <!-- <div>{{mail.sentAt}}</div> -->
                    <div class="mail-date">{{formattedDate}}</div>
                    <button @click="deleteMail(mail.id)">X</button>
                <!-- </div> -->
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
    },
    computed:{
        formattedDate() {
            var options = { day: "numeric", month: "short" };
            return new Date(this.mail.sentAt).toLocaleDateString("en-US", options);
        }
    }
}