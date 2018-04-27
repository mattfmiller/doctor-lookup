import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { APICall } from './scripts.js'

let displayResults = function(result) {
  $("#doctor-info").append(`Doctor: Dr.  ${result.data[0].profile.first_name} ${result.data[0].profile.last_name}, ${result.data[0].profile.title}`);
}

let displayError = function () {

}

$(document).ready(function(){
  $("#button").click(function(){
    let search = new APICall();
    let medicalIssue = $("#medical-issue").val();
    let doctorName = $("#doctor-name").val();

    search.betterDoctorApiCall(medicalIssue, doctorName).then(function(response) {
      let result = JSON.parse(response);
      console.log(result);
      displayResults(result);
    }, function() {
      displayError();
    });
  });
});
