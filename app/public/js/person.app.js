var personApp= new Vue({
  el: '#personProfileApp',
  data: {
    person: {
      "gender": "",
        "name": {
          "title": "",
          "first": "",
          "last": ""
        },
        "location": {
          "street": "",
          "city": "",
          "state": "",
          "postcode": "",
          "coordinates": {
            "latitude": "",
            "longitude": ""
          },
          "timezone": {
            "offset": "",
            "description": ""
          }
        },
        "email": "",
        "login": {
          "uuid": "",
          "username": "",
          "password": "",
          "salt": "",
          "md5": "",
          "sha1": "",
          "sha256": ""
        },
        "dob": {
          "date": "",
          "age": null
        },
        "registered": {
          "date": "",
          "age": null
        },
        "phone": "",
        "cell": "",
        "id": {
          "name": "",
          "value": ""
        },
        "picture": {
          "large": "",
          "medium": "",
          "thumbnail": ""
        },
        "nat": ""
    }
  },
  methods: {
    fetchPerson(event){
      fetch('https://randomuser.me/api')
      //.then(function(result) {return result.json()})
      .then(response => response.json()) //taking response object from headers
      .then(json => {personApp.person = json.results[0]});
      //same as
      // .then(function(json) {waitingApp.people =json});
      //console.log("This happens quickly")
      //fetch is started and then put to the side, 'then' happens after fetching, consolelog happens while fetching
    }
  },
  created: function(event){
   this.fetchPerson();
  }
})
