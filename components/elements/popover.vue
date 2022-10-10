<template lang="pug">
.popover
    #elem
        slot
    #tooltip(role="tooltip") {{text}}
        #arrow(data-popper-arrow)
</template>
<script>
import { createPopper } from '@popperjs/core'
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        location: {
            type: String,
            default: 'top'
        }
    },
    data() {
        return {
            elem: null,
            tooltip: null,
            popperInstance: null
        }
    },
    mounted() {
        this.elem = document.querySelector('#elem')
        this.tooltip = document.querySelector('#tooltip')
        this.popperInstance = createPopper(this.elem, tooltip, {
            placement: this.location,
            modifiers: [
            {
                name: 'offset',
                options: {
                offset: [0, 8],
                },
            },
            ],
        });

        const showEvents = ['mouseenter', 'focus'];
        const hideEvents = ['mouseleave', 'blur'];

        showEvents.forEach((event) => {
            this.elem.addEventListener(event, this.show);
        });

        hideEvents.forEach((event) => {
            this.elem.addEventListener(event, this.hide);
        });
    },
    methods: {
        hide() {
            this.tooltip.removeAttribute('data-show');
            // Disable the event listeners
            this.popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
            }));
        },
        show() {
            tooltip.setAttribute('data-show', '');

            this.popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
            }));
            this.popperInstance.update();
        }
    }
}
</script>
<style lang="scss" scoped>
#arrow,
#arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
}

#arrow {
    visibility: hidden;
}

#arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
}
#tooltip {
    display: none;
    background: #333;
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
}
#tooltip[data-popper-placement^='top'] > #arrow {
    bottom: -4px;
}

#tooltip[data-popper-placement^='bottom'] > #arrow {
    top: -4px;
}

#tooltip[data-popper-placement^='left'] > #arrow {
    right: -4px;
}

#tooltip[data-popper-placement^='right'] > #arrow {
    left: -4px;
}
#tooltip[data-show] {
    display: block;
}
</style>