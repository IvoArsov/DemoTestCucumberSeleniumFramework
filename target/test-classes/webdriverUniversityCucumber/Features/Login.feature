Feature: Login into account
	
Scenario Outline: Login to account with credentials
	Given user navigates to "<url>"
	When user click on the login portal button
	And user enters the "<username>" username 
	And user enters the "<password>" password
	When user click on the login button
	Then the user should be presented with the fallowing promp alert "<message>"
	
	Examples: 
		|               url                  |     username |      password   |      message          |
		| http://www.webdriveruniversity.com | user1        | pass1           | validation failed     |
		| http://www.webdriveruniversity.com | user1        |                 | validation failed     |
		| http://www.webdriveruniversity.com |              | pass1           | validation failed     |
		| http://www.webdriveruniversity.com | webdriver    | webdriver123    | validation succeeded  | 
	  

	  