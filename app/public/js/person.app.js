var personApp= new Vue({
  el: '#personProfileApp',
  data: {
    person: [{
      name: {
        title:'',
        last: '',
        first: ''
      },
      gender: '',
      location: {
        street: '',
        city: '',
        state: '',
        postcode: '',
        coordinates: {
          latitude: '',
          longitude: ''
        },
        timezone: {
          offset: '',
          description: ''
        }
      },
      email: '',
      dob: {
        date: '',
        age: ''
      },
      phone: '',
      cell: '',
      picture: {
        large: '',
        medium:'',
        thumbnail: ''
      }
    }
    ]
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
