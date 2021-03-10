$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the fallowing promp alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 12,
      "id": "login-into-account;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "user1",
        "pass1",
        "validation failed"
      ],
      "line": 13,
      "id": "login-into-account;login-to-account-with-credentials;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "user1",
        "",
        "validation failed"
      ],
      "line": 14,
      "id": "login-into-account;login-to-account-with-credentials;;3"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "",
        "pass1",
        "validation failed"
      ],
      "line": 15,
      "id": "login-into-account;login-to-account-with-credentials;;4"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 16,
      "id": "login-into-account;login-to-account-with-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1797010300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"user1\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"pass1\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the fallowing promp alert \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 962214600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_the_login_portal_button()"
});
formatter.result({
  "duration": 108227800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 328688400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass1",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 65172900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 50755400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 61
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_the_fallowing_promp_alert(String)"
});
formatter.result({
  "duration": 18725000,
  "status": "passed"
});
formatter.after({
  "duration": 793053800,
  "status": "passed"
});
formatter.before({
  "duration": 1245487300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"user1\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the fallowing promp alert \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 1645100700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_the_login_portal_button()"
});
formatter.result({
  "duration": 83460500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 328327600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 62771300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 55267100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 61
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_the_fallowing_promp_alert(String)"
});
formatter.result({
  "duration": 10442600,
  "status": "passed"
});
formatter.after({
  "duration": 763612600,
  "status": "passed"
});
formatter.before({
  "duration": 1206137200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"pass1\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the fallowing promp alert \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 1121803900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_the_login_portal_button()"
});
formatter.result({
  "duration": 72957100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 294605500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass1",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 69312600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 49326100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 61
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_the_fallowing_promp_alert(String)"
});
formatter.result({
  "duration": 10376100,
  "status": "passed"
});
formatter.after({
  "duration": 785320700,
  "status": "passed"
});
formatter.before({
  "duration": 1201634800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"webdriver123\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the fallowing promp alert \"validation succeeded\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 1119459800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_the_login_portal_button()"
});
formatter.result({
  "duration": 84163400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 21253895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 63401100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 46108900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 61
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_the_fallowing_promp_alert(String)"
});
formatter.result({
  "duration": 11299100,
  "status": "passed"
});
formatter.after({
  "duration": 833476200,
  "status": "passed"
});
});