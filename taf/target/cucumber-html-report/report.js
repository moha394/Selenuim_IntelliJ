$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/userRegistration.feature");
formatter.feature({
  "name": "User Registration",
  "description": "\tI want to check that the user can Registrater in Website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the User in the Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "name": "I Entered the UserName Data \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cemail\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The Registration Page Displayed Successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "ahmed",
        "moahmed",
        "moha2453qwdewq6@gmail.com",
        "1234556677"
      ]
    },
    {
      "cells": [
        "ahmed12",
        "moahmed",
        "moha2232233116@gmail.com",
        "1234556677"
      ]
    },
    {
      "cells": [
        "ahmed13",
        "moahmed",
        "moha2545343116@gmail.com",
        "1234556677"
      ]
    },
    {
      "cells": [
        "ahmed14",
        "moahmed",
        "moha2465461146@gmail.com",
        "1234556677"
      ]
    },
    {
      "cells": [
        "ahmed15",
        "moahmed",
        "moha245464115636@gmail.com",
        "1234556677"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the User in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UserRegistration.the_user_in_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UserRegistration.click_on_Register_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Entered the UserName Data \"ahmed\",\"moahmed\",\"moha2453qwdewq6@gmail.com\",\"1234556677\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.UserRegistration.EneterData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Registration Page Displayed Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.UserRegistration.the_registration_Successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the User in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UserRegistration.the_user_in_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UserRegistration.click_on_Register_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Entered the UserName Data \"ahmed12\",\"moahmed\",\"moha2232233116@gmail.com\",\"1234556677\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.UserRegistration.EneterData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Registration Page Displayed Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.UserRegistration.the_registration_Successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the User in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UserRegistration.the_user_in_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UserRegistration.click_on_Register_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Entered the UserName Data \"ahmed13\",\"moahmed\",\"moha2545343116@gmail.com\",\"1234556677\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.UserRegistration.EneterData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Registration Page Displayed Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.UserRegistration.the_registration_Successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the User in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UserRegistration.the_user_in_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UserRegistration.click_on_Register_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Entered the UserName Data \"ahmed14\",\"moahmed\",\"moha2465461146@gmail.com\",\"1234556677\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.UserRegistration.EneterData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Registration Page Displayed Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.UserRegistration.the_registration_Successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the User in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UserRegistration.the_user_in_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UserRegistration.click_on_Register_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Entered the UserName Data \"ahmed15\",\"moahmed\",\"moha245464115636@gmail.com\",\"1234556677\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.UserRegistration.EneterData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Registration Page Displayed Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.UserRegistration.the_registration_Successfully()"
});
formatter.result({
  "status": "passed"
});
});