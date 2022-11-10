import { noteTxt } from '../cmps/new-notes/txt-note.cmp.js'
import { noteImg } from '../cmps/new-notes/img-note.cmp.js'
import { noteTodos } from '../cmps/new-notes/todos-note.cmp.js'
// import videoNote from '../apps/keep/cmps/new-notes/video-note.cmp.js'


export default {
    props: ['note'],
    template: `
        <article class="note-preview">
             <component :is="note.type" :note='note'>
            </component>
        </article>
    `,

    components: {
        noteTxt,
        noteImg,
        noteTodos
    }
}