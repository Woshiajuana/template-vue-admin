
import * as filters from 'src/utils/filters'

export default {

    ...filters,

    base64ToBlob (base64Data) {
        let bstr = atob(base64Data),
            l = bstr.length,
            u8Arr = new Uint8Array(l);
        while (l--) {
            u8Arr[l] = bstr.charCodeAt(l);
        }
        return new Blob([u8Arr]);
        // return new Blob([u8Arr], {
        //     type: 'jpg'
        // });
    },

    downloadBase64 (base64Data, filename) {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(this.base64ToBlob(base64Data));
        a.download = filename;
        a.click();
    },

    removeDateConnector (strDate) {
        return strDate.replace(/-/g, '');
    },

    addedDateConnector (strDate, connector = '-') {
        return `${strDate.substring(0, 4)}${connector}${strDate.substring(4, 6)}${connector}${strDate.substring(6)}`
    },

}
