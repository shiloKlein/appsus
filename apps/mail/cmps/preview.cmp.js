
export default {
    name: 'preview',
    props: ['mail'],
    template: `
        <section class="mail-preveiw flex ">
            <i class="fa-regular fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <!-- <router-link :to="'/mail/' + mail.id">for details > -->
                <h4>{{mail.from}}</h4>
                <h3>{{mail.subject}}</h3>
                <p>{{mail.body}}</p>
            <!-- </router-link> -->

        </section>
    `,

    data() {
        return {

        }
    },
}