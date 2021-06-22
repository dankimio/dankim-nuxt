---
layout: post
title: Safari vs. Chrome
createdAt: 2017-06-24
---

I always find myself switching between Safari and Chrome. I decided to write down the reasons for choosing one over the other. Currently, I use Chrome and I am planning to switch back to Safari.

# Safari

## Superior battery life

Safari utilizes native APIs to better handle energy impact when inactive. CPU usage is much lower when Safari is in the background. Safari was optimized to use App Nap to conserve energy.

![Average battery impact](/images/2017/safari-vs-chrome/average-battery-impact.png)

## Keychain integration

For those, who don't use 1Password or other password managers, iCloud Keychain is a simple way to manage and store passwords in the cloud. Safari provides native integration with iCloud Keychain which includes password completion and generation. All passwords are synced across all Apple devices without any additional setup.

![Safari Keychain](/images/2017/safari-vs-chrome/safari-keychain.png)

Chrome, on the other hand, uses its own password manager that synchronizes passwords exclusively with your Google account.

## iCloud sync

On iOS Safari seems like an obvious choice because of its integration with the system. Apple made it so that links in all iOS applications open in Safari, unless the developer provided a way to choose the preferred browser. That puts restrictions on our choice of the desktop browser.

![Safari iCloud](/images/2017/safari-vs-chrome/safari-icloud.png)

If you use Safari on both iOS and Mac, then your history, tabs and bookmarks are synchronized by default. The same goes for Chrome, but if you open a link, that someone shared with you in iMessage, it will open in Safari: your visit to the page is not recorded in the browser history and desktop Chrome cannot see the tab. You will have to take the extra step of opening the link in mobile Chrome.

## Native notifications

Web notifications, in my opinion, aren’t the most popular feature in browsers, but sometimes they are useful, take Slack for example. Safari uses native Notification Center, where notifications from other apps are also displayed.

![Notifications in Safari](/images/2017/safari-vs-chrome/safari-notification.png)

You can configure notification style and  sound in the system preferences. Safari also respects “Do Not Disturb” mode.

![Notifications preferences Safari](/images/2017/safari-vs-chrome/notifications-preferences.png)

Chrome, however, uses its own notifications that look like alerts. It is possible to make Chrome use native notifications by enabling #enable-native-notifications feature flag in `chrome://flags`, but there’s no guarantee that Google will support this flag in the future.

## Privacy

Apple takes personal privacy very seriously. When using Safari I have at least some sense of privacy: I am sure that Apple will not use my browsing history and habits to target ads because it doesn’t make 90% of its revenue from ads.

![Google Web App Activity screenshot](/images/2017/safari-vs-chrome/google-web-app-activity.png)

By default, Google will use your browsing history to provide “customized experiences in Google products”.

## Native look and feel

Safari looks like it’s a part of the ecosystem: it uses native UI elements that don’t feel alien. Safari provides a nice sharing extension like on iOS.

![Safari sharing dialog](/images/2017/safari-vs-chrome/safari-sharing.png)

Keyboard shortcuts match with the system ones. Even though Chrome tries to imitate system shortcuts, it is far from perfect: tab switching shortcuts (`⌘ + ⇧ + [` and `⌘ + ⇧ + ]`) do not work in non-English keyboard layouts, no way of accessing a tab or a bookmark by its number (`⌘ + 1` and `⌘ + ⌥ + 1`).

# Chrome

## Multiple profiles

Browser settings depend on the workflow. Work related browsing should be separated from personal browsing. It’s not uncommon to have multiple accounts for one website: one for work and one for ourselves. Usually I want to keep logins, cookies and preferences separated from each other. With separate profiles you can always be sure that nothing personal leaks into your work.

![Profile switcher in Chrome](/images/2017/safari-vs-chrome/chrome-profiles.png)

Chrome allows to easily switch between profiles and sync them between multiple devices (additional Google account is required though). I have a different set of bookmarks for my work account that I don’t want to keep in my personal profile, extensions are also installed separately.

## Cross-platform

Safari is not supported on Windows. For those who use Windows, there’s no choice but to use a cross-platform browser like Chrome. It is very painful to use different browsers because you’ll have to manage bookmarks and settings by yourself. Chrome synchronizes everything and is available on all platforms.

## Extensions

Chrome has a very rich extension ecosystem. Chrome provides a variety of APIs for extension developers which made uBlock Origin, HTTPS Everywhere and other extensions possible. Chrome Web Store has thousands of extensions for all occasions. Safari requires developers to join Apple Developer Program and pay $99 a year to have their extension published in Extensions Gallery, which explains a lot.

![Chrome Web Store](/images/2017/safari-vs-chrome/chrome-web-store.png)

## Reliability

Apple has never been good at making reliable web services. Bookmark management is a mess: duplicates appear out of nowhere, some items disappear and some just don't appear on other devices instantly.

Developers at Google, on the other hand, have done a great job. Never had I seen a merge conflict or a duplicate entry in Chrome.

## Faster Google search

Google search is almost instant in Chrome. Search suggestions appear within a flash as you type. Suggestions are much slower in Safari: it can take a second to display suggestions and another second to display search results. It can be infuriating when you need search results as quickly as possible.

![Google Search in Chrome](/images/2017/safari-vs-chrome/chrome-search.png)

## Frequent updates

Chrome updates seamlessly in the background. There can be multiple updates and the user won't even notice them. These updates include security fixes and support for the latest web standards. Safari is updated via Mac App Store or macOS upgrades and that happens much less often.

![Updates in Chrome](/images/2017/safari-vs-chrome/chrome-updates.png)
