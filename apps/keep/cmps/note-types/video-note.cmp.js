export const noteVideo = {
    props: ['note'],
    template: `
    <section class="video-note">
        <h2>{{ note.title }}</h2>
       <img :src="note.info.url"/>
       
    </section>
    `,
    methods: {

    },

}
