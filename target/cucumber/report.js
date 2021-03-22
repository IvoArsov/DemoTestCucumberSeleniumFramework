$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactus.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1758499100,
  "status": "passed"
});
formatter.before({
  "duration": 1260775700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I access to webdriveruniversity contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a valid firstname",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid last name",
  "rows": [
    {
      "cells": [
        "Woods",
        "Jackson",
        "Peters"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "example comments one",
        "example comments two"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The information should successfully be submitted via contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_to_webdriveruniversity_contact_form()"
});
formatter.result({
  "duration": 880916700,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_firstname()"
});
formatter.result({
  "duration": 83647500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 64148000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 76233600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 118190700,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 501023900,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_contact_us_form()"
});
formatter.result({
  "duration": 3042909000,
  "status": "passed"
});
formatter.after({
  "duration": 616982900,
  "status": "passed"
});
formatter.after({
  "duration": 633790200,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Products page",
  "description": "",
  "id": "products-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be presented with a promo alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;",
  "rows": [
    {
      "cells": [
        "url",
        "button"
      ],
      "line": 9,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
        "container-special-offers"
      ],
      "line": 10,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1215784500,
  "status": "passed"
});
formatter.before({
  "duration": 1200026200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"container-special-offers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 15
    }
  ],
  "location": "ProductsSteps.i_navigate_to_website(String)"
});
formatter.result({
  "duration": 3454031300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "container-special-offers",
      "offset": 12
    }
  ],
  "location": "ProductsSteps.i_click_on(String)"
});
formatter.result({
  "duration": 3077416700,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.i_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 3066704300,
  "status": "passed"
});
formatter.after({
  "duration": 1234270500,
  "status": "passed"
});
formatter.after({
  "duration": 613824300,
  "status": "passed"
});
});