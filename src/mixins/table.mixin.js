
export default {
    data () {
        return {
            tableData$: [],
            tableQuery$: {
                numIndex: 1,
                numSize: 10,
                numTotal: 0,
                isLoading: false,
            },
        }
    },
    methods: {
        reqTableDataList (e, type = false) {
            let isCb = typeof e === 'function';
            if (isCb || type) {
                this.tableData$.numIndex = 1;
            }
            this.tableQuery$.isLoading = true;
            let { numIndex: current, numSize: size } = this.tableQuery$;
            let { fn, params = {} } = this.getUrlParamsOptions();
            let options = {
                current,
                size,
                ...params,
            };
            this.$api[fn](options).then((res) => {
                let { total = 0, records = [] } = this.formatResult(res, options);
                if (Array.isArray(res)) {
                    records = res;
                    total = res.length;
                }
                this.tableData$ = records;
                this.tableQuery$.numTotal = +total;
            }).toast().finally(() => {
                this.tableQuery$.isLoading = false;
                isCb && e();
            });
        },
        formatResult (res) {
            return res;
        },
    },
}
