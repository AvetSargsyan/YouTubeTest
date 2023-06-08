Feature: The YouTube test with Cucumber + WebdriverIO

    Scenario Outline: Login page's test
        #Home page
        Given Open <url> page
        When Maximize window
        Then Check "videos" content is displayed in "basePage" page
            And Check "signIn" button is displayed in "basePage" page
            And Check "signIn" button is clickable in "basePage" page
        When Click on "signIn" button in "basePage" page

        #Login page
        Then Check "signIn" text is displayed in "loginPage" page
            And Check "email" input is displayed in "loginPage" page
        When Type <userEmail> into "email" input
        Then Check "Next" button is displayed in "loginPage" page
            And Check "Next" button is clickable in "loginPage" page
        When Click on "Next" button in "loginPage" page
        Then Check <userEmail> to be correct
            And Check "password" input is displayed in "loginPage" page
        When Type <password> into "password" input
        Then Check "Next" button is displayed in "loginPage" page
            And Check "Next" button is clickable in "loginPage" page
        When Click on "Next" button in "loginPage" page

        #Home page
        Then Check "youtube" page is open
        When Maximize window
        When Click on "profile" button in "basePage" page
        Then Check <userEmail> is set in "shownEmail" field

        Examples:
        | url                        | userEmail           | password   |
        | "https://www.youtube.com/" | "moxedaby@afia.pro" | "123!@#Aa" |

    Scenario: Base page's test
        Then Check "header" content is displayed in "basePage" page
            And Check "logo" icon to be child of "header" content
            And Check "guideMenu" icon to be child of "header" content
            And Check "search" input to be child of "header" content
            And Check "Search" button to be child of "header" content
            And Check "SearchWithVoice" button to be child of "header" content
            And Check "Create" button to be child of "header" content
            And Check "Notifications" button to be child of "header" content
            And Check "profile" button to be child of "header" content
        When Click on "guideMenu" button in "basePage" page
        Then Check "Home" label to be child of "guide" sidebar
            And Check "Shorts" label to be child of "guide" sidebar
            And Check "Subscriptions" label to be child of "guide" sidebar
            And Check "Library" label to be child of "guide" sidebar
            And Check "History" label to be child of "guide" sidebar
            And Check "WatchLater" label to be child of "guide" sidebar
            And Check "LikedVideos" label to be child of "guide" sidebar
            
    Scenario: Video content's test
        Then Check "videos" content is displayed in "basePage" page
        When Click on "guideMenu" button in "basePage" page
        Then Check "firstVideo" title is displayed in "basePage" page
            And Check "firstVideo" title is displayed in "basePage" page
            And Check "videoContentsHeader" content is displayed in "basePage" page
            And Check "firstVideo" video is clickable in "basePage" page
        When Click on "firstVideo" video in "basePage" page

        #Video page
        Then Check "choosedVideo" page is open
        When Click on "guideMenu" button in "basePage" page
        Then Check "History" label to be child of "guide" sidebar
        When Click on "History" button in "basePage" page
        Then Check "history" page is open

    Scenario: History page's test
        #History page
        Then Check "WatchHistory" text is displayed in "historyPage" page
        Then Check "watchedVideo" video is displayed in "historyPage" page
        Then Check "HistoryType" text is displayed in "historyPage" page
        Then Check "searchWatchHistory" input is displayed in "historyPage" page
        Then Check "PauseWatchHistory" button is displayed in "historyPage" page
        Then Check "Clear" button is displayed in "historyPage" page