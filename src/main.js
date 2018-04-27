import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { APICall } from './scripts.js'

let displayResults = function() {

}

let displayError = function () {
  
}

$(document).ready(function(){
  let seach = new ApiCall();
  let medicalIssue = $("#medical-issue").val();
  let doctorName = $("#doctor-name").val();

  search.betterDoctorApiCall(medicalIssue, doctorName).then(function(response) {
    let result = JSON.parse(response);
    displayResults();
  }, function() {
    displayError(error);
  });

});
