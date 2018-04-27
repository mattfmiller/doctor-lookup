class APICall {

  betterDoctorApiCall(medicalIssue, name, specialty) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let error;
      let url =`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${medicalIssue}&specialty_uid=${specialty}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url);
      request.send();
    });
    return promise;
  }

  specialtyApiCall() {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let error;
      let url =`https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url);
      request.send();
    });
    return promise;
  }
}

export { APICall };
