import Vue from 'vue'

import standartPage from '@/layouts/standartPage'

import footerPage from '@/components/elements/footerPage'
import headerFeed from '@/components/elements/headerFeed'
import toolbarItem from '@/components/elements/toolbarItem'

import loginCover from '@/components/login/loginCover'
import loginForm from '@/components/login/loginForm'

import settingsNotifications from '@/components/settings/settingsNotifications'
import settingsProfile from '@/components/settings/settingsProfile'

import userBookmarks from '@/components/user/userBookmarks'
import userHome from '@/components/user/userHome'
import userLists from '@/components/user/userLists'
import userMessages from '@/components/user/userMessages'
import userNewPost from '@/components/user/userNewPost'
import userNews from '@/components/user/userNews'
import userNotifications from '@/components/user/userNotifications'
import userProfile from '@/components/user/userProfile'
import userSettings from '@/components/user/userSettings'
import userSubscriptions from '@/components/user/userSubscriptions'
import userToolbar from '@/components/user/userToolbar'


export default () => {
  Vue.component('standart-page', standartPage)

  Vue.component('footer-page', footerPage)
  Vue.component('header-feed', headerFeed)
  Vue.component('toolbar-item', toolbarItem)

  Vue.component('login-cover', loginCover)
  Vue.component('login-form', loginForm)

  Vue.component('settings-notifications', settingsNotifications)
  Vue.component('settings-profile', settingsProfile)

  Vue.component('user-bookmarks', userBookmarks)
  Vue.component('user-home', userHome)
  Vue.component('user-lists', userLists)
  Vue.component('user-messages', userMessages)
  Vue.component('user-new-post', userNewPost)
  Vue.component('user-news', userNews)
  Vue.component('user-notifications', userNotifications)
  Vue.component('user-profile', userProfile)
  Vue.component('user-settings', userSettings)
  Vue.component('user-subscriptions', userSubscriptions)
  Vue.component('user-toolbar', userToolbar)
}
