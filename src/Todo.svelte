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
    <h1>{todo.title}</h1>
    <p>{todo.content}</p>
  </div>
  <div class='todo-action'>
    <button on:click={()=>deleteTodo(todo)}>Delete</button>
  </div>
</article>