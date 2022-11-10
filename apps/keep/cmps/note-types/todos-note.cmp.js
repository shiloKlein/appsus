export const noteTodos = {
  props: ['note'],
  template: `
    <section class="todos-note">
        <h2>{{note.info.label}}</h2>
      <ul>
                <li class="todo-note-li" v-for="todo in note.info.todos" >
                  <input type="checkbox"> <span>{{todo.txt}}</span>
                </li>
    </ul>
    </section>
    `,
  methods: {

  },

}
