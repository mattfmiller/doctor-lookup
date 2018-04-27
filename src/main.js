import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { APICall } from './scripts.js'

let displayResults = function(result) {
  if (result.data.length === 0) {
    $("#doctor-info").append("There were no matching doctors for your search.");
  } else {
    for (var i = 0; i < result.data.length; i++) {
      $("#doctor-info").append(`<br><br><h5>Dr. ${result.data[i].profile.first_name} ${result.data[i].profile.last_name}, ${result.data[i].profile.title}</h5>
      <p>${result.data[i].practices[0].visit_address.street}<br>
      ${result.data[i].practices[0].visit_address.street2}<br>
      ${result.data[i].practices[0].visit_address.city}, ${result.data[i].practices[0].visit_address.state} ${result.data[i].practices[0].visit_address.zip}</p>
      <p>Phone: ${result.data[i].practices[0].phones[0].number}</p>
      `);
      if (result.data[i].practices[0].accepts_new_patients === true) {
        $("#doctor-info").append("Accepting New Patients: Yes");
      } else {
        $("#doctor-info").append("Accepting New Patients: No");
      }
    }
  }
}

let displayError = function (error) {
  $("#doctor-info").append(`There was an error while processig your request: ${error.message}`);
}

$(document).ready(function(){
  $("#button").click(function(){
    $("#doctor-info").empty();
    let search = new APICall();
    let medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    let doctorName = $("#doctor-name").val();
    $("#doctor-name").val("");

    search.betterDoctorApiCall(medicalIssue, doctorName).then(function(response) {
      let result = JSON.parse(response);
      console.log(result);
      displayResults(result);
    }, function(error) {
      displayError(error);
    });
  });
});
