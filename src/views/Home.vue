<template>
    <div class="home row">
        <div class="col-4">
            toggle
        </div>
        <div class="col-4">
            <SwitchToggle
                :labels="{ checked: 'Lignt', unchecked: 'Dark' }"
                :width="70"
                :height="30"
                color="#cccacc"
                switchColor="#06183d"
                v-model="switch_value"
            />
        </div>
        <div class="col-4">
            {{ switch_text }}
            <button @click="test">testing</button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import SwitchToggle from '@/components/SwitchToggle.vue';

export default {
    name: 'Home',
    components: {
        SwitchToggle
    },
    data() {
        return {
            switch_value: true,
            switch_text: 'change01'
        };
    },
    watch: {
        switch_value: {
            immediate: true,
            handler(value) {
                if (value == true) {
                    //light
                    this.switch_text = 'change01';
                } else {
                    //dark
                    this.switch_text = 'change02';
                }
            }
        }
    },
    methods: {
        test() {
            console.log(this.switch_value);
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
    padding: 10px;
}
</style>
