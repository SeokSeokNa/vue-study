Vue.createApp({
    data() {
        return {
            message: 'Hello Vue.js',
            message2: 'new Message',
            uid: '10',
            nums: [1,2,3],
            flag: true
        }
    },
    methods: {
        clickBtn() {
            this.message2 =  (this.message2 == 'new Message') ?  'change Message' : 'new Message';
        }
    },
    computed: {
        computedTest() {
            console.log('change!!')
            return this.message2
        }
    }
}).mount('#app');