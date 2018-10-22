import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Search } from "./doctor.js";

$(document).ready(function () {
  $("#doctorForm").submit(function(event) {
    event.preventDefault();
    $("#results").text("");
    $("#error").text("");
    let doctor = $("#doctorSearch").val();
    let newSearch = new Search();
    let promise = newSearch.foundDoctor(doctor);

    promise.then(function (response) {
      let body = JSON.parse(response);
      let result = body.data;
      console.log(result);

      if (body.data.length === 0) {
        $("#results").text("No doctor found, try another one.");
      }
      for(var i=0; i < result.length; i++) {
        $("#results").append("<h4>" + result[i].profile.first_name +" " + result[i].profile.last_name + "</h4>"+ "Phone number: " + result[i].practices[0].phones[0].number + "<br>" +  "<br>" + "<h5>" + "Address : " + "</h5>" + "City: " + result[i].practices[0].visit_address.city + "<br>" + "State: " + result[i].practices[0].visit_address.state + "<br>" +
        "Street: " + result[i].practices[0].visit_address.street + "<br>" +
        "Zip: " + result[i].practices[0].visit_address.zip + "<br>" +
        "Available: " + result[i].practices[0].accepts_new_patients + "<br>" + "<hr>");
      }
  });
});
  //
  $("#illnessForm").submit(function (event) {
    event.preventDefault();
    $("#results").text("");
    $("#error").text("");
    let illness = $("#illnessSearch").val();
    let newSearch = new Search();
    let promise = newSearch.foundIllness(illness);

    promise.then(function (response) {
      let body = JSON.parse(response);
      let result = body.data;
      if (body.data.length === 0) {
        $("#error").text("Results not found.");
      }
      for(var i=0; i < result.length; i++) {
        $("#results").append("<h4>" + result[i].profile.first_name +" " + result[i].profile.last_name + "</h4>"+ "Phone number: " + result[i].practices[0].phones[0].number + "<br>" +  "<br>" + "<h5>" + "Address : " + "</h5>" + "City: " + result[i].practices[0].visit_address.city + "<br>" + "State: " + result[i].practices[0].visit_address.state + "<br>" +
        "Street: " + result[i].practices[0].visit_address.street + "<br>" +
        "Zip: " + result[i].practices[0].visit_address.zip + "<br>" +
        "Available: " + result[i].practices[0].accepts_new_patients + "<br>" +
        "Bio: " + result[i].profile.bio + "<br>" + "<hr>" );
      }
  })
  })

});
