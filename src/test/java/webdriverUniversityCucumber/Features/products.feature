Feature: Products page

Scenario Outline: Validate promo code alert is visible when clicking on the special offers link
	Given I navigate to "<url>" website
	When I click on "<button>" 
	Then I should be presented with a promo alert 
	
	Examples: 
	| 									url								 | 			button			 |
	| http://www.webdriveruniversity.com/Page-Object-Model/products.html | container-special-offers  | 