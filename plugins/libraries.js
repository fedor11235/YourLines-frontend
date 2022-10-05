// import Vue from 'vue'
// import VTooltip from 'v-tooltip'
// import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
// Vue.component('v-popover', VPopover)
// Vue.use(VTooltip)

import Vue from 'vue'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)