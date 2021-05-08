const ComputeVueApp = {
    data() {
        return {
            email: 'Y-Suzuki@exmaple.com'
        }
    },
    computed: {
        // 算出プロパティ
        localEmail() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
}

Vue.createApp(ComputeVueApp).mount('#app')