import newMail from '../apps/mail/cmps/new-mail.cmp.js'
import mailsList from '../apps/mail/cmps/mails-list.cmp.js'
import mailNav from '../apps/mail/cmps/mail-nav.cmp.js'

import { mailService } from '../apps/mail/services/mail-service.js'



export default {
    template: `
        <section class="email-app flex">

            <mail-nav @folderChosen="filterByFolder" 
            @composeClicked="compose"/>
            <mails-list :mails="mails" @delete="deleteMail"/>
            <new-mail v-if="isWriting" @close="close"/>
        </section>
    `,
    data() {
        return {
            mails: null,
            criteria: {
                status: '',
                txt: 'puki',
                isRead: true, // (optional property, if missing: show all) 
                isStared: true, // (optional property, if missing: show all) 
                //  lables: [] // has any of the labels }
            },
            isWriting: false
        }
    },

    created() {
        this.getMails()
    },

    methods: {

        getMails() {
            mailService.query()
                .then(mails => this.mails = mails)
        },
        deleteMail(mailId) {
            mailService.remove(mailId)
                .then( ()=> {
                    const idx = this.mails.findIndex(mail => mail.id === mailId)
                    this.mails.splice(idx, 1)
                    // showSuccessMsg(`Mail ${mailId} deleted`)
                })
        },
        compose(){
        this.isWriting=true
        },
        close(){
            this.isWriting=false
        },

        filterByFolder(folder) {
            this.criteria.status = folder
            console.log(folder);
        },
    },


    components: {
        newMail,
        mailsList,
        mailNav

    }
}
