Feature: The YouTube test

  Scenario Outline: As a user, I should log in
    Given Open <url> page
    Then Check "sign in" button is displayed
        And Check "sign in" button is clickable
    When Click "sign in" button


    Then "Sign in" page is open
    Then Check "email" input is exist
    When Type <userEmail> into 'Email' input
    Then Check "Next" button is exist
        And Check "Next" button is clickable
    When Click on "Next" button
    Then Check <userEmail> to be correct

    Examples:
    | url                        | userEmail           | password   |
    | "https://www.youtube.com/" | "moxedaby@afia.pro" | "123!@#Aa" |

    