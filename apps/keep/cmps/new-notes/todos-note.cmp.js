export const noteTodos = {
    props: ['note'],
    template: `
    <section class="todos-note">
        <h2>{{note.info.label}}</h2>
      <ul>
                <li v-for="todo in note.info.todos">
                    {{todo.txt}}
                </li>
    </ul>
    </section>
    `,
    methods: {

    },

}
