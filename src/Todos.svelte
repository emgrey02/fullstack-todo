<script>
  import {onMount} from 'svelte';
  import Todo from './Todo.svelte';
  import AddTodo from './AddTodo.svelte';

  let visibleForm = false;
  let todos = [];

  onMount(async () => {
    await fetch('http://localhost:4000/api/todos/').then(res => res.json()).then(data => {
      todos = data;
    })
  });

  function toggleForm() {
    visibleForm = !visibleForm;
  }


</script>

{#if todos}
<ul>
  {#each todos as todo}
  <li>
    <Todo {todo} />
  </li>
  {/each}
</ul>
{:else}
<p class='loading'>loading...</p>
{/if}
<button on:click={toggleForm}>{visibleForm ? 'x' : '+'}</button>

{#if visibleForm}
<AddTodo />
{/if}

<style>
  ul {
    padding: 0;
    margin: 0;
    padding-block: 1em;
  }

  li {
    border-bottom: 1px solid black;
    padding-inline-end: .5em;
  }

  button {
    padding: .1em .8em;
  }
</style>