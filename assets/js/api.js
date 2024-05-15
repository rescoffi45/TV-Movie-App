"use strict";

const api_key = "ef5d138e190f392876196b60d31eee5c";
const imageBaseURL = "http://image.tmdb.org/t/p/";

/*--------- 
Fetch data from a server using the 'url' and passes the result in JSON data to a 'callback' function, along with an optional parameter if has 'optionalParam'.
----------*/

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
