



const userAction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    document.getElementById('#todo').innerHTML(myJson);
  }