 const axios = require('axios')
// // axios.get("https://jsonplaceholder.typicode.com/todos")
axios.get("https://localhost:7226/api/Employees/1")
    .then(response => console.log(response.data))

