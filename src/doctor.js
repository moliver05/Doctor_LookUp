
export class searchDoctor {
    lookupDoctor(name, illness) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        console.log(name);
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?=name=${doctor}&query=${illness}&location=47.608013%2C-122.335167%2C100&user_location=47.608013%2C-122.336&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
        request.onload = function() {
          if (this.status === 200) {
            console.log(request.response);
            resolve(request.response);
          } else {
            console.log("error");
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
        
      });
    }
}
