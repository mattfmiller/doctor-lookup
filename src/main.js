import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { APICall } from './scripts.js';
import { Doctor } from './doctor.js';

let specialtiesSelectBox = function(result) {
  if (result.data.length !== 0) {
    for (var i = 0; i < result.data.length; i++) {
      $("#specialties").append(`<option value ="${result.data[i].uid}">${result.data[i].actor}</option>`);
    }
  }
};

let displayResults = function(result) {
  if (result.data.length === 0) {
    $("#doctor-info").append("There were no matching doctors for your search.");
  } else {
    for (var i = 0; i < result.data.length; i++) {
      let doctor = new Doctor(result.data[i]);
      doctor.populateSpecialties(result.data[i]);
      $("#doctor-info ul").append(`<li><strong>${doctor.name}</strong><br>
      ${doctor.address}<br>
      ${doctor.phone}<br>
      ${doctor.website}<br>
      ${doctor.accepting}<br>
      Specialties: ${doctor.specialties}<br></li>`
      );
    }
  }
};

let displayError = function (error) {
  $("#doctor-info").append(`There was an error while processinsg your request: ${error.message}`);
};

$(document).ready(function(){
  let specialtiesCall = new APICall();
  specialtiesCall.specialtyApiCall().then(function(response) {
    let result = JSON.parse(response);
    specialtiesSelectBox(result);
  }, function(error) {
    displayError(error);
  });

  $("#button").click(function(){
    $(".results").empty();
    let search = new APICall();
    let medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    let doctorName = $("#doctor-name").val();
    $("#doctor-name").val("");
    let specialty = $("#specialties").val();
    $("#specialties").val("");

    search.betterDoctorApiCall(medicalIssue, doctorName, specialty).then(function(response) {
      let result = JSON.parse(response);
      displayResults(result);
    }, function(error) {
      displayError(error);
    });
  });
});
