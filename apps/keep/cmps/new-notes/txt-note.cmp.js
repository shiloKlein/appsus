export const noteTxt = {
    props: ['note'],
    template: `
        <article class="txt-note">
            <h2>{{ note.info.title }}</h2>
            <h3>{{ note.info.txt }}</h3>
          
        </article>
    `,
}
