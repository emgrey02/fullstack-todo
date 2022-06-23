<script>
  export let todo;

  async function deleteTodo(todo) {
    const res = await fetch('http://localhost:4000/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: todo._id
      })
    });
    const data = await res.json();
    if (data.success) {
      window.location.href = '/';
    }
  }
</script>

<article>
  <div class='todo-body'>
    <p class='title'>{todo.title}</p>
    <p class='content'>{todo.content}</p>
  </div>
  <div class='todo-action'>
    <button on:click={()=>deleteTodo(todo)}>Delete</button>
  </div>
</article>

<style>

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 325px;
    max-width: 500px;
  }

  .todo-body {
    padding: 1em;
  }

  .title {
    font-size: 1.6rem;
    color: black;
    font-weight: 500;
  }
</style>