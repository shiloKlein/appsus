'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

import mailData from '../../data/demo-mails.json' assert {type:'json'}

const MAIL_KEY = 'mailDB'

const loggedinUser = { email: 'vueser@apl.com', fullname: 'Async Await' }
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getNextMailId,
    sendMail,
    getLoggedInUser,

}

function getLoggedInUser() {
    return loggedinUser
}

function sendMail({ to, subject, body }) {
    const user = loggedinUser
    const mail = _createMail(user.email, to, subject, body)
    return storageService.post(MAIL_KEY, mail)
}

function query({ folder }) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (folder === 'inbox') {
                mails = mails.filter(mail => !mail.isSent && !mail.isTrash)
            }
            else if (folder === 'starred') {
                mails = mails.filter(mail => mail.isStarred && !mail.isTrash)
            }
            else if (folder === 'sent') {
                mails = mails.filter(mail => mail.isSent && !mail.isTrash)
            }
            else if (folder === 'trash') {
                mails = mails.filter(mail => mail.isTrash)
            }
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(subject = '', body = '', sentAt = null, from = '', to = '') {
    return {
        id: '', subject, body, sentAt, from, to,
        isRead: false,
        isSent: true,
        isTrash: false,
        isDraft: false,
    }
}


function getNextMailId(mailId) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            var idx = mails.findIndex(mail => mail.id === mailId)
            if (idx === mails.length - 1) idx = -1
            return mails[idx + 1].id
        })
}


function _createMail(from = '', to = '', subject = '', body = '', sentAt = null) {
    const mail = getEmptyMail(subject, body, sentAt, from, to)
    mail.to = to
    mail.subject = subject
    mail.body = body
    mail.sentAt = Date.now()
    mail.id = utilService.makeId()
    return mail
}


function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)

    if (!mails || !mails.length) {
        mails = mailData
        storageService.save(MAIL_KEY, mails)
    }
    return mails
}