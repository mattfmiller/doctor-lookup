import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { APICall } from './scripts.js'
import { Doctor } from './doctor.js'

let displayResults = function(result) {
  if (result.data.length === 0) {
    $("#doctor-info").append("There were no matching doctors for your search.");
  } else {
    for (var i = 0; i < result.data.length; i++) {
      let doctor = new Doctor(result.data[i]);
      $("#doctor-info").append(`<strong>${doctor.name}</strong><br>
      ${doctor.address}<br>
      ${doctor.phone}<br>
      ${doctor.website}<br>
      ${doctor.accepting}<br>`
      )
    }
  }
}

let displayError = function (error) {
  $("#doctor-info").append(`There was an error while processinsg your request: ${error.message}`);
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
