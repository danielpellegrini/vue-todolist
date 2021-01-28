// scrivere in un input
// premendo invio nell'input oppure cliccando sul submit, salvare nella lista la nuova nota
// visualizzare tutte le note nel box sottostante
// cancellare la nota, cliccando sulla X corrispondente


new Vue({
  el: '#app',
  data: {

    newTodoText: '',
    todos: [

    ],
  },
  methods: {
    addNewTodo: function() {
      this.todos.push(this.newTodoText)
      this.newTodoText = '';
    },
    removeTodo: function(todoIndex) {
      this.todos = this.todos.filter((item, index) => {
        return index !== todoIndex
      });
    }
  }
})
Vue.config.devtools = true;
