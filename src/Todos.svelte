<script>
  import {onMount} from 'svelte';
  import Todo from './Todo.svelte';

  let todos = [];

  onMount(async () => {
    await fetch('http://localhost:4000/api/todos/').then(res => res.json()).then(data => {
      todos = data;
    })
  });


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