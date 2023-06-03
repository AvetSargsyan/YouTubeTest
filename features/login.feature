Feature: The YouTube test

  Scenario Outline: As a user, I should log in
    #Home page
    Given Open <url> page
    Then Check "sign in" button is displayed
        And Check "sign in" button is clickable
    When Click "sign in" button

    #Login page
    Then Check "sign in" page is open
        And Check "email" input is exist
    When Type <userEmail> into "email" input
    Then Check "Next" button is displayed
        And Check "Next" button is clickable
    When Click "Next" button
    Then Check <userEmail> to be correct
        And Check "password" input is exist
    When Type <password> into "password" input
    Then Check "Next" button is displayed
        And Check "Next" button is clickable
    When Click "Next" button

    #Home page
    Then Check redirecting to <url> page
    When Click "profile" button
    Then Check <userEmail> is set in "email_field"

    Examples:
    | url                        | userEmail           | password   |
    | "https://www.youtube.com/" | "moxedaby@afia.pro" | "123!@#Aa" |

    