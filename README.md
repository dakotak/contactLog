Contact Log
======
Application to track contact with a specific person.
This application will have a web based front end backed by a restful API.


## Features
* Quickly add a contact event, update later.
* Show recent contacts.
* Run reports to show contact history, frequency, and compliance.

## Technologies Used or Considered (still planning)
* PHP
* Slim Framework
* AngularJS
  * AngularUI Router (http://angular-ui.github.io/ui-router/)
* Bootstrap

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
* __type__: This describes the type of contact. I.e. Phone, Video/Facetime, Supervised Visit, Visit.
* __startTime__: The time that the visit started, stored as a Unix Timestamp (Epoch time)
* __finishTime__: The time that the visit finished, stored as a Unix Timestamp (Epoch time)
* __notes__: This is an array of notes. Each item will have the following properties:
  * __text__: This is the content of the note.
  * __time__: This is the time the note was added, stored as a Unix Timestamp (Epoch Time)
  * __user__: Reference to the user who added the note. This may be an email or a pointer to a user record.
  * __deleted__: This holds a boolean value that will flag a note as deleted.
* __location__: Primary location of the contact.
* __comment__: A brief comment on this visit.
* __completed__: Boolean value the represents if this entry is complete or if it needs to be completed.
* __The following properties are specific to certain visit types.__
* __pickupLocation__: Short name/description of the location where a pickup occurred I.E. Starbucks on Olson Dr. and Folsom Blvd.
* __dropoffLocation__: Short name/description of the location where a dropoff occurred.
* __supervisor__: Array of people or companies who were responsible for supervising a visit. Each entry should include the following properties:
  * __name__: Name of the person or company who is responsible for supervising this contact.
  * __contact__: Contact phone number for the person responsible for supervising this contact.