<script>
  import Todos from './Todos.svelte';
  import AddTodo from './AddTodo.svelte';
</script>

<main>
  <div>
    <h1>To-do List</h1>
  </div>

  <Todos />
</main>

<style>
  main {
    display: grid;
    place-items: center;
  }

  h1 {
    margin-block: 3rem;
  }
</style>