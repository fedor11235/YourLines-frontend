import Vue from 'vue'

import footerPage from '@/components/elements/footerPage'
import postProfile from '@/components/elements/postProfile'
import postHome from '@/components/elements/postHome'
import headerFeed from '@/components/elements/headerFeed'
import toolbarItem from '@/components/elements/toolbarItem'
import headerMessages from '@/components/elements/headerMessages'
import headerPayments from '@/components/elements/headerPayments'
import headerCreator from '@/components/elements/headerCreator'
import warning from '@/components/elements/warning'
import information from '@/components/elements/information'
import inputLabel from '@/components/elements/inputLabel'
import modalHelp from '@/components/elements/modalHelp'
import popover from '@/components/elements/popover'
import suggestions from '@/components/elements/suggestions'
import message from '@/components/elements/message'

import loginCover from '@/components/login/loginCover'
import loginForm from '@/components/login/loginForm'

import creatorInfo from '@/components/creator/creatorInfo'
import creatorNotification from '@/components/creator/creatorNotification'

import settingsEditNotifications from '@/components/settings/settingsEditNotifications'
import settingsEditProfile from '@/components/settings/settingsEditProfile'
import settingsEditAccount from '@/components/settings/settingsEditAccount'
import settingsEditLanguage from '@/components/settings/settingsEditLanguage'

import messagesNew from '@/components/messages/messagesNew'
import messagesSearch from '@/components/messages/messagesSearch'
import messagesСhoices from '@/components/messages/messagesСhoices'
import messagesWrite from '@/components/messages/messagesWrite'

import paymentsInfo from '@/components/payments/paymentsInfo'
import paymentsWallet from '@/components/payments/paymentsWallet'
import paymentsAddCard from '@/components/payments/paymentsAddCard'

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
import userSubscribers from '@/components/user/userSubscribers'
import userToolbar from '@/components/user/userToolbar'
import userAnotherProfile from '@/components/user/userAnotherProfile'


export default () => {

  Vue.component('footer-page', footerPage)
  Vue.component('post-profile', postProfile)
  Vue.component('post-home', postHome)
  Vue.component('header-feed', headerFeed)
  Vue.component('header-messages', headerMessages)
  Vue.component('header-payments', headerPayments)
  Vue.component('header-creator', headerCreator)
  Vue.component('toolbar-item', toolbarItem)
  Vue.component('warning', warning)
  Vue.component('information', information)
  Vue.component('input-label', inputLabel)
  Vue.component('modal-help', modalHelp)
  Vue.component('popover', popover)
  Vue.component('suggestions', suggestions)
  Vue.component('message', message)

  Vue.component('creator-info', creatorInfo)
  Vue.component('creator-notification', creatorNotification)

  Vue.component('login-cover', loginCover)
  Vue.component('login-form', loginForm)

  Vue.component('settings-edit-notifications', settingsEditNotifications)
  Vue.component('settings-edit-profile', settingsEditProfile)
  Vue.component('settings-edit-account', settingsEditAccount)
  Vue.component('settings-edit-language', settingsEditLanguage)

  Vue.component('messages-new', messagesNew)
  Vue.component('messages-search', messagesSearch)
  Vue.component('messages-choises', messagesСhoices)
  Vue.component('messages-write', messagesWrite)

  Vue.component('payments-info', paymentsInfo)
  Vue.component('payments-wallet', paymentsWallet)
  Vue.component('payments-add-card', paymentsAddCard)

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
  Vue.component('user-subscribers', userSubscribers)
  Vue.component('user-toolbar', userToolbar)
  Vue.component('user-another-profile', userAnotherProfile)
}
