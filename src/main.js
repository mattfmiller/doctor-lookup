import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { APICall } from './scripts.js'

let displayResults = function(result) {
  $("#doctor-info").append(`<br><br><h5>Dr. ${result.data[0].profile.first_name} ${result.data[0].profile.last_name}, ${result.data[0].profile.title}</h5><br>
  <p>${result.data[0].practices[0].visit_address.street}<br>
  ${result.data[0].practices[0].visit_address.street2}<br>
  ${result.data[0].practices[0].visit_address.city}, ${result.data[0].practices[0].visit_address.state} ${result.data[0].practices[0].visit_address.zip}</p>
  <p>Phone: ${result.data[0].practices[0].phones[0].number}</p>
  `);
  if (result.data[0].practices[0].accepts_new_patients === true) {
    $("#doctor-info").append("Accepting New Patients: Yes")
  } else {
    $("#doctor-info").append("Accepting New Patients: No")
  }
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
