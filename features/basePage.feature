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

    Scenario: Base page's test
        Then Check "header" content is displayed in "base" page
            And Check "logo" icon to be child of "header" content
            And Check "guideMenu" icon to be child of "header" content
            And Check "searchByText" input to be child of "header" content
            And Check "search" button to be child of "header" content
            And Check "searchWithVoice" button to be child of "header" content
            And Check "create" button to be child of "header" content
            And Check "notifications" button to be child of "header" content
            And Check "profile" button to be child of "header" content
        When Click on "guideMenu" button in "base" page
        Then Check "home" label to be child of "guide" sidebar
            And Check "shorts" label to be child of "guide" sidebar
            And Check "subscriptions" label to be child of "guide" sidebar
            And Check "library" label to be child of "guide" sidebar
            And Check "history" label to be child of "guide" sidebar
            And Check "watchLater" label to be child of "guide" sidebar
            And Check "likedVideos" label to be child of "guide" sidebar