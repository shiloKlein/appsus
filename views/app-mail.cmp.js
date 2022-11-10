import newMail from '../apps/mail/cmps/new-mail.cmp.js'
import mailsList from '../apps/mail/cmps/mails-list.cmp.js'
import mailNav from '../apps/mail/cmps/mail-nav.cmp.js'

import { mailService } from '../apps/mail/services/mail-service.js'



export default {
    template: `
            <input v-model="searchTxt" type="text" /><!--should be in comp or header -->
        <section class="email-app flex">
            <mail-nav @folderChosen="getMails" 
            @composeClicked="compose"/>

            <mails-list v-if="this.mails" :mails="mails" @delete="deleteMail"/>
            <new-mail v-if="isWriting"
            @close="close"
            @send="sendMail"/>
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
            searchTxt: '',
            isWriting: false
        }
    },

    created() {
        this.getMails()
    },

    methods: {
        getMails() {
            const folder =  this.$route.params
            mailService.query(folder)
                .then(mails =>{
                    this.mails = mails
                    console.log(mails);
                })
        },
        deleteMail(mailId) {
            mailService.remove(mailId)
                .then(() => {
                    const idx = this.mails.findIndex(mail => mail.id === mailId)
                    this.mails.splice(idx, 1)
                    // showSuccessMsg(`Mail ${mailId} deleted`)
                })
        },
        compose() {
            this.isWriting = true
            console.log(this.router);
        },
        close() {
            this.isWriting = false
        },
        sendMail(newMail) {
            mailService.sendMail(newMail)
                .then(mail => {
                    console.log(mail);
                    this.mails.push(mail)
                })
            this.isWriting = false
        },

    },
    computed: {
        mailsToShow() {
            if (!this.criteria) return this.mails
            const regex = new RegExp(this.searchTxt, 'i')
            console.log(this.searchTxt);
            return this.mails.filter(({to, from}) => regex.test(to)&&regex.test(from))
       },

        mailsInFolder(folder) {
            const user = mailService.getLoggedInUser

        },
    },
        


        components: {
            newMail,
            mailsList,
            mailNav

        }
    }
