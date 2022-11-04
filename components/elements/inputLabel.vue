<template lang="pug">
.input-label
    input.input(v-model="valueData" id="lastname" placeholder=" ")
    label.placeholder(for="lastname") {{placeholder}}
</template>
<script>
export default {
    props: {
        placeholder: {
            type: String,
            required: true
        },
        valueProp: {
            type: String | Number,
            required: true
        }
    },
    data() {
        return {
            valueData: ''
        }
    },
    mounted() {
        this.valueData = this.valueProp
    },
    watch: {
        valueData(val){
            this.$emit('changeInput', val)
        }
    }
}
</script>
<style lang="scss" scoped>
.input-label {
    height: 40px;
    position: relative;
    width: 100%;

    .input {
        border: 1px solid #8a96a3;
        border-radius: 5px;
        height: 100%;
        outline: 0;
        padding: 10px 16px;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
    }

    .placeholder {
        padding: 0 2px;
        color: #65657b;
        background-color: #fdfdfd;
        left: 16px;
        line-height: 20px;
        pointer-events: none;
        position: absolute;
        transform-origin: 0 50%;
        transition: transform 200ms, color 200ms;
        top: 8px;
    }

    .input:focus ~ .placeholder,
    .input:not(:placeholder-shown) ~ .placeholder {
        transform: translateY(-20px) scale(0.75);
    }

    .input:not(:placeholder-shown) ~ .placeholder {
        color: #808097;
    }

    .input:focus ~ .placeholder {
        color: #7a92ef;
    }

    .input:focus {
        border: 1px solid #7a92ef;
    }
}
</style>