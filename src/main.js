import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { searchDoctor } from "./doctor.js";

$(document).ready(function () {
    $("#doctorForm").submit(function (event) {
        event.preventDefault();
        $("#results").text("");
        $("#error").text("");
        let doctor = $("#doctorSearch").val();
        let illness = $("#illnessSearch").val();
        let newSearch = new searchDoctor();

        let promise = newSearch.currentStatus(doctor, illness);
        promise.then(function (response) {
            let body = JSON.parse(response);
            if (body.data.length === 0) {
                $("#error").text("No doctor found, try another one.");
            }
            body.data.forEach(function (doctor) {
                $("#results").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} <br>
                ${doctor.practices[0]} </li> <br>`)
              });

        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });


    });
});
