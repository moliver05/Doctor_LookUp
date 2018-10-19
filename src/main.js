import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { searchDoctor } from "./doctor.js";

$(document).ready(function () {
    $(document).ready(function () {
        $("#doctorForm").submit(function (event) {
            event.preventDefault();
            $("#resultsArea").text("");
            $("#error").text("");
            let doctor = $("#doctorSearch").val();
            let illness = $("#illnessSearch").val();
            let newSearch = new searchDoctor();

            let promise = newSearch.lookupDoctor(doctor, illness);
            promise.then(function (response) {
                let body = JSON.parse(response);
                if (body.data.length === 0) {
                    $("#errorField").text("No doctor match search criterias.");
                }
                body.data.forEach(function (doctor) {
                    $("#results").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} <br> </li> <br>`)
                });

            }, function (error) {
                $('.showErrors').text(`There was an error processing your request: ${error.message}`);
            });
        });

    });
});
