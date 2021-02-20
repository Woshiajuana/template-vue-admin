
export default {

    data () {
        return {
            dialog$: { is: false, data: '' },
        }
    },

    methods: {
        handleDialogDisplay (options = { type: 'add', data: '', }, key = 'dialog$') {
            if (this.beforeDialogShow) {
                return this.beforeDialogShow().then(() => this[key] = { ...this[key], is: true, ...(options || {}) })
            }
            this[key] = { ...this[key], is: true, ...(options || {}) };
        },
    },

}
