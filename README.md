Contact Log
======
Application to track contact with a specific person.
This application will have a web based front end backed by a restful API.


## Features
* Quickly add a contact event, update later.
* Show recent contacts.
* Run reports to show contact history, frequency, and compliance.

## Technologies Used or Considered (still planning)
* PHP (API Backend)
* Slim Framework
* AngularJS

## TODOs
* Keep working on UI to get something that feels nice.
* Build API

## UI 

## REST API

### Endpoints
* /contact
* /contact/:id
*/contact/types - Returns a list of all contact types in the database.

## Contact Class
 This describes how to classify a contact item, what properties does it have.
* type: This describes the type of contact. I.e. Phone, Video/Facetime, Supervised Visit, Visit.
* startTime: The time that the visit started, stored as a Unix Timestamp (Epoch time)
* finishTime: The time that the visit finished, stored as a Unix Timestamp (Epoch time)
* notes: This is an array of notes. Each item will have the following properties:
  * text: This is the content of the note.
  * time: This is the time the note was added, stored as a Unix Timestamp (Epoch Time)
  * user: Refrence to the user who added the note. This may be an email or a pointer to a user record.
  * deleted: This holds a boolean value that will flag a note as deleted.
* location: Primary location of the contact.
* comment: A brief comment on this visit.
* __The following properties are specific to certain visit types.__
* pickupLocation: Short name/description of the location where a pickup occurred I.E. Starbucks on Olson Dr. and Folsom Blvd.
* dropoffLocation: Short name/description of the location where a dropoff occurred.
* supervisor: Array of people or companies who were responsible for supervising a visit. Each entry should include the following properties:
  * name: Name of the person or company who is responsible for supervising this contact.
  * contact: Contact phone number for the person responsible for supervising this contact.