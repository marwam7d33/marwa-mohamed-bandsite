class BandSiteApi {
  constructor(apikey) {
    this.apiKey = apikey;
    this.baseurl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  // It must send a POST request to the API with the comment object

  async postComment(comment) {
    try {
      const response = await axios.post(
        `${this.baseurl}/comments?api_key=${this.apiKey}`,
        comment,
        {
          "Content-Type": "application/json",
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  // The getComments method must sort the array of comments from the API, returning them in order from newest to oldest.
  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseurl}/comments?api_key=${this.apiKey}`
      );
      return response.data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
    } catch (error) {
      console.log(error);
    }
  }

  //   getShows: This method accepts no parameters. It must send a GET request to the provided shows API, using the API key instance property (e.g. this.apiKey) to authenticate the request.
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseurl}/showdates?api_key=${this.apiKey}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
