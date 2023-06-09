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

            
    Scenario: Video content's test
        Then Check "videos" content is displayed in "base" page
        When Click on "guideMenu" button in "base" page
        Then Check "firstVideo" title is displayed in "base" page
            And Check "firstVideo" title is displayed in "base" page
            And Check "videoContentsHeader" content is displayed in "base" page
            And Check "firstVideo" video is clickable in "base" page
        When Click on "firstVideo" video in "base" page

        #Video page
        Then Check "choosedVideo" page is open
            And Check "guideMenu" button is clickable in "base" page
        When Click on "guideMenu" button in "base" page
           And Check "history" button is displayed in "base" page
           And Check "history" button is clickable in "base" page
        When Click on "history" button in "base" page
        Then Check "watchHistory" text is displayed in "history" page

    Scenario: History page's test
        #History page
        Then Check "watchHistory" text is displayed in "history" page
            And Check "watchedVideo" video is displayed in "history" page
            And Check "historyType" text is displayed in "history" page
            And Check "searchWatchHistory" input is displayed in "history" page
            And Check "pauseWatchHistory" button is displayed in "history" page
            And Check "clear" button is displayed in "history" page
        When Click on "clear" button in "history" page
        Then  Check "clearWatchHistory" button is displayed in "history" page
        When Click on "clearWatchHistory" button in "history" page
        Then  Check "emptyList" text is displayed in "history" page