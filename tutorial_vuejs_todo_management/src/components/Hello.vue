<template>
  <div>
    {{msg}}
    <form>
      <button v-on:click="addTodo()">ADD TASK</button>
      <button v-on:click="removeFinishedTasks()">Delete finished Tasks</button>
      <p>input: <input type="text" v-model="newTasks"></p>
      <p>task:{{newTasks}}</p>
    </form>
    <div class="task-list">
      <label class="task-list__item" v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <input type="checkbox" v-model="todo.edit">
        <input type="text" v-if="todo.edit" v-model="todo.text" v-on:keyup.enter="todo.edit=!todo.edit">
        <span v-else>{{todo.text}}</span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Hello",
    data() {
      return {
        msg: 'おっ',
        todos: [
          {text: 'foo', done: false, edit: false},
          {text: 'bar', done: false, edit: false},
          {text: 'qux', done: false, edit: false}
        ],
        newTasks: ''
      }
    },
    methods: {
      addTodo: function (event) {
        const text = this.newTasks && this.newTasks.trim();
        if (!text) {
          return
        }
        this.todos.push({
          text: text,
          done: false
        });
        this.newTasks = ''
      },
      removeFinishedTasks: function (event) {
        // for(let i =0; this.todos.length;i++){ //spliceの挙動？
        for (let i = this.todos.length - 1; i >= 0; i--) {
          if (this.todos[i].done) this.todos.splice(i, 1);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin flex-vender() {
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
  }

  .task-list {
    @include flex-vender;
    flex-direction: column;
    align-items: center;

    &__item {
      width: 270px;
      text-align: left;
      $element: #{&};

      &--checked {
        @extend #{$element};
        color: #85a6c6;
      }
    }
  }
</style>
