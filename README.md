# project2

## Project 2. 
* Web-based questionnaires for interviewing tinnitus patients.
* Enter and store data from patients’ interview questionnaires: Initial and Follow-up questionnaires (the templates of the paper form are available).

* Team Members
    * Dylan Ceronio
    * Albert Levan
    * Carl Shefcik

### Running Front End:
* The frontend was built with React using Node.js
* Documentation for the frontend is inside project2View/website and can be built using a cli

### Implement requirements:

* 1.4: Interview Screen
    * Upper Panel: inacive fields (auto filled by the system)
        * Visit ID - each visit has a unique id in the system
        * Visit Date
        * Patient's name
        * Patient's THC#
        * Visit's sequence number for the patient
    * Options
        * Initial / Follow-Up Interview Questionnaire
        * Tinnitus Handicap Inventory (THI) Questionnaire
        * Tinnitus Function Index New Questionnaire
* 1.4.1: Initial / Follow-Up Interview Screen
    * Initial Interview is performed at the first visit. Follow-Up interview is conducted at subsequent visits.
        * The interview screens should follow the template of the paper versions supplied
    * The upper panned of the screen should be auto-populated with the patient data and the current date
    * The questionnaire is divided into three sections
        1. Tinnitus
        1. Sound Tolerance
        1. Hearing Loss (HL)
    * Options
        * Save
        * Cancel
        * Help - provides hints to filling out the questionnaires
* 3.5: Fill out Interview Form
    1. The users performs Add New Visit
    1. The user chooses the option Add Interview
    1. the sustem opens the Interview screen
    1. The user chooses the option Initial / Follow-Up Interview
    1. The user fills out the required infomation
    1. The user chooses option Save
    1. The system adds the interview data
    * Variation #1 adding interview to the current visit
        * The user performs Lookup Patient
        * The user chooses the Current Visit option
        * Go to step 2
~~1.11.3: Medical Data~~
~~3.13.3: Add/Edit Medical Data~~



Sample tables: Visit, Interview.

We are using oracle db 11g and Javascript
