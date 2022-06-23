<script>
  import {fade} from 'svelte/transition';

  async function handleSubmit(e) {
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    
    //send data to api
    await fetch('http://localhost:4000/api/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(() => {
      window.location.href = '/'
    })
  }

</script>

<div transition:fade>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <input type='text' id='title' name='title' placeholder='title of todo'>
    </div>
    <div>
      <textarea id='content' name='content' placeholder='content of todo' rows='2'/>
    </div>
    <div>
      <button type='submit'>Submit</button>
    </div>
  </form>
</div>

<style>
  form {
    padding: 1rem;
    display: grid;
    gap: 1em;
    width: 500px;
  }

  input {
    font-size: 1.6rem;
  }

  input, textarea {
    width: 100%;
    border: none;
  }

  textarea {
    resize: vertical;
  }

  textarea::after {
    content: '';
    width: 500px;
    background: black;
    height: 5px;
    position: absolute;
  }
</style>