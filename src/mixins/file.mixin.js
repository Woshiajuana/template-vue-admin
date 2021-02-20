

export default {
    data () {
        return {
            fileList: [],
            uploadLoading: false,
        };
    },
    methods: {
        handleRemove(file, fileList) {
            this.fileList = fileList;
        },
        handlePreview(file) {
            this.$api.doFileDownload(file).then((res) => {
                let { fileName, fileBlob } = res;
                this.$helper.downloadBase64(fileBlob, fileName);
            }).toast();
        },
        handleBeforeUpload (file) {
            const formData = new FormData();
            formData.append('file', file);
            this.uploadLoading = true;
            this.$api.doFileUpdate(formData).then((res) => {
                let { fileId } = res;
                this.fileList.push({ name: file.name, fileId });
            }).toast().finally(() => this.uploadLoading = false);
            return false;
        },
    },
}
