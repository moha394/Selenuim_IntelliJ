Feature: User Registration
	I want to check that the user can Registrater in Website
	
	
Scenario Outline: User Registration
Given the User in the Home Page
When I click on Register Link
And  I Entered the UserName Data "<firstname>","<lastname>","<email>","<password>"
Then The Registration Page Displayed Successfully
 
Examples:
|firstname| lastname| email| password|
|ahmed|moahmed|moha2453qwdewq6@gmail.com|1234556677|
|ahmed12|moahmed|moha2232233116@gmail.com|1234556677|
|ahmed13|moahmed|moha2545343116@gmail.com|1234556677|
|ahmed14|moahmed|moha2465461146@gmail.com|1234556677|
|ahmed15|moahmed|moha245464115636@gmail.com|1234556677|