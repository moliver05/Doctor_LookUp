# Doctor LookUp

### API that searches nearby Doctors according to their Specialties
### API that also searches for information on what your current sickness or disease you have

#### By **Mark Mangahas**

## Description

**API that will let the user input search doctors and their current sickness** 

A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


### Specs

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program Gathers Age of User** | Doctor: "doctor name" | Current Sickness: "user input"  |
| **Program gathers info about the doctor and its specialty** | Dr. Strange | Pscyhiatrist |
| **User can search what kind of sickness/disease they have** | Sickness | Information |


## Setup/Installation Requirements

1. Clone this repository at https://github.com/moliver05/Doctor_LookUp
2. Get You Api Key at https://developer.betterdoctor.com/ (sign up)
3. Make your own .env file on the Root folder
3. Open Terminal and type in (-npm install)
4. To run, type in (-npm run start)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* Javascript
* DotEnv
* CSS

## Support and contact details

_mo.mangahas@gmail.com_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Mark Mangahas}_**
