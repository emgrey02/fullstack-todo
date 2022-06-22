<script>
  async function handleSubmit(e) {
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(JSON.stringify(data));
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

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <input type='text' id='title' name='title' placeholder='title of todo'>
    </div>
    <div>
      <textarea id='content' name='content' placeholder='content of todo' cols='30'/>
    </div>
    <div>
      <button type='submit'>Submit</button>
    </div>
  </form>
</div>