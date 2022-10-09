export default (ctx) => {
  ctx.store.commit('CHANGE_LANGUAGE', ctx.i18n.defaultLocale)
}
