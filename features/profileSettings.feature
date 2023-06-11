Feature: The YouTube test with Cucumber + WebdriverIO

    Scenario Outline: Login page's test
        #Home page
        Given Open <url> page
        When Maximize window
        Then Check "videos" content is displayed in "base" page
            And Check "signIn" button is displayed in "base" page
            And Check "signIn" button is clickable in "base" page
        When Click on "signIn" button in "base" page

        #Login page
        Then Check "signIn" text is displayed in "login" page
            And Check "email" input is displayed in "login" page
        When Type <userEmail> into "email" input
        Then Check "next" button is displayed in "login" page
            And Check "next" button is clickable in "login" page
        When Click on "next" button in "login" page
        Then Check <userEmail> is set in "profileidentifier" field in "login" page
            And Check "password" input is displayed in "login" page
        When Type <password> into "password" input
        Then Check "next" button is displayed in "login" page
            And Check "next" button is clickable in "login" page
        When Click on "next" button in "login" page

        #Home page
        Then Check "youtube" page is open
        When Maximize window
        When Click on "profile" button in "base" page
        Then Check <userEmail> is set in "shownEmail" field in "base" page

        Examples:
        | url                        | userEmail           | password   |
        | "https://www.youtube.com/" | "moxedaby@afia.pro" | "123!@#Aa" |

    Scenario: Changing settings test
        Given "youtube" page is open 
        Then Check "account" button is displayed in "base" page
            And Check "account" button is clickable in "base" page
        When Get "firstVideo" title font color
            And Double click on "account" label in "base" page
        Then Check "pageMenu" content is displayed in "base" page
            And Check "deviceTheme" label is displayed in "base" page
        When Click on "deviceTheme" label in "base" page
        Then Check "appearanceMenu" content is displayed in "base" page
            And Check "darkTheme" label is displayed in "base" page
            And Check "darkTheme" label is clickable in "base" page
        When Click on "darkTheme" label in "base" page
        Then Check "firstVideo" title font color to be changed
        When Double click on "account" label in "base" page
        Then Check "pageMenu" content is displayed in "base" page
            And Check "language" label is displayed in "base" page
        When Click on "language" label in "base" page
        Then Check "chooseLanguage" content is displayed in "base" page
            And Check "russian" language option is exist in "base" page
        When Click on "russian" label in "base" page
        Then Check "searchByText" input placeholder text to be changed to "Введите запрос"
