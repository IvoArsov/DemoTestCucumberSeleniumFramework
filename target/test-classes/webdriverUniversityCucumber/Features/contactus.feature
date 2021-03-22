Feature: Submit data to webdriveruniversity.com using contact us form

Scenario: Submit valid data via contact us form 
		Given I access to webdriveruniversity contact form
		When I enter a valid firstname 
		When I enter a valid last name 
		| Woods | Jackson | Peters |
		And I enter a valid email address 
		And I enter comments 
		| example comments one | example comments two |
		When I click on the submit button  
		Then The information should successfully be submitted via contact us form 
 		
		 