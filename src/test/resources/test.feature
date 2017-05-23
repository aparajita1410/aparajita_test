@smokeTest
Feature: To test my cucumber test is running I want to run a test feature file.

Scenario: Cucumber setup

Given I am on ebay page
When I search sony tv
When I select the screen size
When I select random product
When I click on add to cart button
When I close additional purchase
When I click on proceed to checkout
Then run should be successful