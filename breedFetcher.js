const request = require("request");

//const breedName = process.argv[2];

//const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

// request(url, (error, response, body) => {
//     //console.log('error:', error); // Print the error if one occurred
//     if(error) {
//         console.log("Error: ", error);
//         return;
//     }
//     // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //console.log(body);
//     // console.log("type is ", typeof body);
//     const j = JSON.parse(body);
//     // console.log("type of j is ", typeof j);
//     // console.log("j is ", j)
//     // console.log("data is ", j[0]);
//     if(!j[0]) {
//         console.log("No such breed");
//         return;
//     }
//     // console.log("description: ", j[0].description);
//     console.log(j[0].description);
//   });

  const fetchBreedDescription = function(breedName, callback) {
    const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
    request(url, (error, response, body) => {
        //console.log('error:', error); // Print the error if one occurred
        if(error) {
            callback(error);
            return;
        }
        const data = JSON.parse(body);
        let desc;
        if(!data[0]) {
            error = "No such breed";
            callback(error);
            return;
        }
        // console.log("description: ", j[0].description);
        //console.log(j[0].description);
        else {
            desc = data[0].description;
        }

        callback(null, desc);
      });
  };

  module.exports = { fetchBreedDescription };