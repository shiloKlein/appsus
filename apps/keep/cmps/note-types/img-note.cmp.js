export const noteImg = {
    props: ['note'],
    template: `
    <section class="img-note">
        <h2>{{ note.title }}</h2>
       <img :src="note.info.url"/>
    </section>
    `,
    methods: {

    },

}

