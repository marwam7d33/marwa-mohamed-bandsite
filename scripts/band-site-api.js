// // In the band-site-api.js file, you must create a class called BandSiteApi with the following methods.

// // constructor: The constructor accepts an API key as its only parameter (e.g. apiKey). This API key will be used when making POST and GET requests to the API (such as in the postComment and getComments methods).
// // The constructor must store the API key parameter in an instance property (e.g. this.apiKey).
// // The constructor must store the base API URL in an instance property (e.g. this.baseUrl). This property can be set to a hardcoded string, as it is not passed as a parameter.

class BandSiteApi {
  constructor(apikey) {
    this.apiKey = apikey;
    this.baseurl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  //   postComment: This method accepts a comment object as its only parameter.
  // It must send a POST request to the API with the comment object

  async postComment(comment) {
    try {
      const response = await axios.post(`${this.baseurl}/comments?api_key=${this.apiKey}`, comment, {
        "Content-Type": "application/json",
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  //   getComments: This method accepts no parameters. It must send a GET request to the API, using the API key instance property (this.apiKey) to authenticate the request.
  // The getComments method must sort the array of comments from the API, returning them in order from newest to oldest.
  async getComments() {
    try {
      const response = await axios.get(`${this.baseurl}/comments?api_key=${this.apiKey}`);
      return response.data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
    } catch (error) {
      console.log(error);
    }
  }

  //   getShows: This method accepts no parameters. It must send a GET request to the provided shows API, using the API key instance property (e.g. this.apiKey) to authenticate the request.
  // The getShows method must return the array of show data objects returned from the API.
  async getShows() {
    try {
      const response = await axios.get(`${this.baseurl}/showdates?api_key=${this.apiKey}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}