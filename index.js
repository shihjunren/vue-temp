//  const axios = require('axios')

// // // axios.get("https://jsonplaceholder.typicode.com/todos")
// axios.get("https://localhost:7226/api/Employees/1")
//     .then(response => console.log(response.data))

// ----------以下第一種-------------

const axios = require('axios')
const https = require('https')


const agent = new https.Agent({
    rejectUnauthorized: false
});
axios.get("https://localhost:7226/api/Employees/1", { httpsAgent: agent })
    .then(response => console.log(response.data))

// ----------以下第二種-------------

// const axios = require('axios');
// const https = require('https');

// const agent = new https.Agent({
//   rejectUnauthorized: false
// });

// (async () => {
//   try {
//     const response = await axios.get('https://localhost:7226/api/Employees/1', {
//       httpsAgent: agent
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// })();




