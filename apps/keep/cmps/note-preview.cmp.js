import { noteTxt } from './note-types/txt-note.cmp.js'
import { noteImg } from './note-types/img-note.cmp.js'
import { noteTodos } from './note-types/todos-note.cmp.js'
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