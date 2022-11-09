

export default {
    template: `
        <section class="new-mail flex flex-column">
            <div class="new-mail-title flex justify-between align-center">
                <div>new massege</div>
                <button @click="saveToDraft">X</button> 
            </div>
            <!-- <form> -->
                <input vi-model="newMail.to" type="text" placeholder="to"/>
                <input vi-model="newMail.subject" type="text" placeholder="subject"/>
                <textarea vi-model="newMail.body" name="" id="" cols="30" rows="10"></textarea>
                <!-- <div class="new-mail-actions flex justify-between"> -->
                    <button  @click.prevent="sendMail" class="send-btn">send</button>
                    <button @click="closeComposer">X</button>
                <!-- </div> -->
            <!-- </form> -->
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
            this.$emit('close')
        },
    }

}
