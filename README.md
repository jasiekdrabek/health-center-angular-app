# HealthCenterAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Firebase deploy

[HealthCenterAngularApp](https://health-center-angular-app.web.app/). Example login: with doctor role: drJan; nurse role: nurseZofia; patient role: patientMama. All acounts have password: 123.

## To do list

- add to home page possibility to calculate clinical markers from [Api](https://rapidapi.com/jdimou/api/clinicalmarkers/)

## App screenshots

### Login

![loginSrceen](/screenshots/login.png)

standard login screen.

### Home

![homeScreen](/screenshots/home.png)

Here we have a home screen where we have information about currently logged user. side nav is allways visable after user login.

### Registration

![registracionScreen](/screenshots/registration.png)

Registracion screen is aviable only for doctor and nurse. Here we can add new patients.


### Patients list

![patientsListScreen](/screenshots/patientsList.png)

This page is also only for doctor and nurse. We can view and delete patients.

### Medical referral

![medialReferralScreen](/screenshots/medicalReferral.png)

Medical referrals are available for all user. Here we can see all our medical referrals.

### Prescription

![prescriptionScreen](/screenshots/prescription.png)

![prescriptionExpandedScreen](/screenshots/prescriptionExpanded.png)

Prescription page is also for all users. We can check all of our prescriptions. When we click on expand arrow we can see list of all medicines in chosen prescription.

### Medicines

![medicinesScreen](/screenshots/medicines.png)

Screen with list of all medicines. Available onle for doctor.

### Medical visits

![medicalVisits1](/screenshots/MedicalVisit1.png)

![medicalVisit2](/screenshots/MedicalVisit2.png)

Here we have medicalVisit screen. ability to add new vistit has doctor and nurse, but only doctor can view and edit visits.

### Medical visit details

![visitDetails](/screenshots/visitDetails.png)

Visit details page where doctor write descripton of it and can add prescription or medical referral. Visit can't be saved if there is no description of it. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
