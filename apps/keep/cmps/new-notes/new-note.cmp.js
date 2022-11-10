export default {


    template: `
        <section class="new-note flex flex-column">
            <div class="new-note-title flex justify-between align-center">
                <textarea v-model="title" placeholder="Title"></textarea>
            </div>
            <div class="new-note-tools flex justify-between align-center">
                <p class="bgc-tool" >bgc</p>
                <p class="pin-tool" >pin</p>
                <p class="duplicate-tool" >bgc</p>
                <p class="mail-tool" >bgc</p>
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
        sendMail() {
            this.$emit('close')
        },
    }

}
