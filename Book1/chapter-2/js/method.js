const app = Vue.createApp({
    data() {
        return {
            email: 'Yazawa-Styly@av.avex.co.jp',
            count: 4
        }
    },
    methods: {
        increment() {
            // `this`はコンポーネントインスタンスを参照
            this.count++
            return this.count
        },
        localEmail() {
            return this.email.split('@')[0].toLowerCase();
        }
    }

})

const vm = app.mount('#app')
vm.increment()
