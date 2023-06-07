Feature: The YouTube test with Cucumber + WebdriverIO

    Scenario Outline: Login page's test
        #Home page
        Given Open <url> page
        When Maximize window
        Then Check "sign_in" is displayed in "base_page"
            And Check "sign_in" is clickable in "base_page"
        When Click on "sign_in" button in "base_page"

        #Login page
        Then Check "sign_in" is exist in "login_page"
            And Check "email_input" is displayed in "login_page"
        When Type <userEmail> into "email_input" input
        Then Check "Next" is displayed in "login_page"
            And Check "Next" is clickable in "login_page"
        When Click on "Next" button in "login_page"
        Then Check <userEmail> to be correct
            And Check "password_input" is displayed in "login_page"
        When Type <password> into "password_input" input
        Then Check "Next" is displayed in "login_page"
            And Check "Next" is clickable in "login_page"
        When Click on "Next" button in "login_page"

        #Home page
        Then Check "youtube" page is open
        When Maximize window
        When Click on "profile" button in "base_page"
        Then Check <userEmail> is set in "email_field"

        Examples:
        | url                        | userEmail           | password   |
        | "https://www.youtube.com/" | "moxedaby@afia.pro" | "123!@#Aa" |

    Scenario: Base page's test
        Then Check "header" is displayed in "base_page"

            And Check "logo_icon" to be child of "header"
            And Check "guide_menu_icon" to be child of "header"
            And Check "search_field" to be child of "header"
            And Check "search_button" to be child of "header"
            And Check "voice_button" to be child of "header"
            And Check "create_button" to be child of "header"
            And Check "notifications_button" to be child of "header"
            And Check "profile" to be child of "header"
        When Click on "guide_menu_icon" button in "base_page"
        Then Check "home_label" to be child of "guide_bar"
            And Check "shorts_label" to be child of "guide_bar"
            And Check "subscriptions_label" to be child of "guide_bar"
            And Check "library_label" to be child of "guide_bar"
            And Check "history_label" to be child of "guide_bar"
            And Check "watch_later_label" to be child of "guide_bar"
            And Check "liked_videos_label" to be child of "guide_bar"
            
    Scenario: Video content's test
        Then Check "video_content" is displayed in "base_page"
        When Click on "guide_menu_icon" button in "base_page"
        Then Check "video_title" is displayed in "base_page"
            And Check "video_title" is displayed in "base_page"
            And Check "contents_header" is displayed in "base_page"
            And Check "any_video" is clickable in "base_page"
        When Click on "any_video" video in "base_page"

        #Video page
        Then Check "video" page is open
        When Click on "guide_menu_icon" button in "base_page"
        Then Check "history_label" to be child of "guide_bar"
        When Click on "history_label" button in "base_page"
        Then Check "history" page is open

    Scenario: History page's test
        #History page

