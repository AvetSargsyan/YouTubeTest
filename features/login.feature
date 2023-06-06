Feature: The YouTube test with Cucumber + WebdriverIO

    Scenario Outline: Login page's test
        #Home page
        Given Open <url> page
        When Maximize window
        Then Check "sign_in" is displayed
            And Check "sign_in" is clickable
        When Click on "sign_in" button

        #Login page
        Then Check "sign_in" is exist
            And Check "email_input" is exist
        When Type <userEmail> into "email_input" input
        Then Check "Next" is displayed
            And Check "Next" is clickable
        When Click on "Next" button
        Then Check <userEmail> to be correct
            And Check "password_input" is exist
        When Type <password> into "password_input" input
        Then Check "Next" is displayed
            And Check "Next" is clickable
        When Click on "Next" button

        #Home page
        Then Check redirecting to <url> page
        When Maximize window
        When Click on "profile" button
        Then Check <userEmail> is set in "email_field"

        Examples:
        | url                        | userEmail           | password   |
        | "https://www.youtube.com/" | "moxedaby@afia.pro" | "123!@#Aa" |

    Scenario: Base page's test
        Then Check "header" is displayed
            And Check "logo_icon" is displayed in "header"
            And Check "guide_menu_icon" is displayed in "header"
            And Check "search_field" is displayed in "header"
            And Check "search_button" is displayed in "header"
            And Check "voice_button" is displayed in "header"
            And Check "create_button" is displayed in "header"
            And Check "notifications_button" is displayed in "header"
            And Check "profile" is displayed in "header"
        When Click on "guide_menu_icon" button
        Then Check "home_label" is displayed in "guide_bar"
            And Check "shorts_label" is displayed in "guide_bar"
            And Check "subscriptions_label" is displayed in "guide_bar"
            And Check "library_label" is displayed in "guide_bar"
            And Check "history_label" is displayed in "guide_bar"
            And Check "watch_later_label" is displayed in "guide_bar"
            And Check "liked_videos_label" is displayed in "guide_bar"

    Scenario: Video content's test
        Then Check "video_content" is displayed
        When Click on "guide_menu_icon" button 
        Then Check "video_title" is displayed
            And Check "video_title" is displayed
            And Check "contents_header" is displayed
            And Check "any_video" is clickable
        When Click on "any_video" video

        #Video page
        Then Check "video" page is open
        When Click on "guide_menu_icon" button
        Then Check "history_label" is displayed in "guide_bar"
        When Click on "history_label" button

        #History page
        Then Check "history" page is open