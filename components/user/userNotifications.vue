<template lang="pug">
.user-notifications
    header-feed(:title="$t('NOTIFICATIONS.TITLE')")
    .notifications-body
    notification(
      v-for="(notification, index) in notificationList"
      :key="index"
      :avatar="notification.avatar"
      :link="notification.link"
      :text="notification.text"
      :date="notification.date"
    )
</template>
<script>
export default {
  data() {
    return {
      notificationList: [
        {
          avatar: '',
          link: 'holipopik',
          text: 'подписался на вас',
          date: '12:46',
        }
      ]
    }
  },
  async mounted() {
    await this.$notificationsService.viewed()
  }
}
</script>
<style lang="scss" scoped>
.user-notifications {
  .notifications-body {

  }
}
</style>