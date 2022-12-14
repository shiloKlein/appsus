// import { mailService } from "../services/mail-service"


export default {
    template: `
        <section class="new-mail flex flex-column">
            <div class="new-mail-title flex justify-between align-center">
                <div>new massege</div>
                <button @click="saveToDraft">X</button> 
                
            </div>
            <form>
                <input v-model="newMail.to" type="mail" placeholder="to"/>
                <input v-model="newMail.subject" type="text" placeholder="subject"/>
                <textarea v-model="newMail.body" name="" id="" cols="30" rows="10"></textarea>
                <!-- <div class="new-mail-actions flex justify-between"> -->
                    <button  @click.prevent="sendMail" class="send-btn">send</button>
                    <!-- </div> -->
                </form>
                <div class="close-composer-btn" @click.prevent="closeComposer">
                <i class="fa-solid fa-trash-can nav-icon">
                </div>
        </section>
    `,
    data() {
        return {
            newMail: {
                to: '',
                subject: '',
                body: '',

            }

        }
    },
    methods: {
        saveToDraft() {
            this.$emit('close')
        },

        closeComposer() {
            this.$emit('close')
        },
        sendMail(){

            this.$emit('send', this.newMail)
        },
    }

}
