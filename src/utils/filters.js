

export const filterDate = (fmt = 'yyyy-MM-dd hh:mm:ss', date = new Date()) => {
    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

export const filterAmount = (s, divisor = 100) => {
    let money = parseFloat(s);
    if (money) {
        s = (money / divisor).toFixed(2) + "";
        let l = s.split(".")[0].split("").reverse();
        let r = s.split(".")[1];
        let t = "";
        l.forEach((ll, key) => {
            t += l[key] + ((key + 1) % 3 == 0 && (key + 1) != l.length ? "," : "");
        });
        return t.split("").reverse().join("") + "." + r;
        // return s;
    } else if (s == 0) {
        return "0.00"
    } else {
        return '---';
    }
};

export const filterLabelByValue = (v, s) => {
    let { label = '' } = s.filter(item => item.value === v)[0] || {};
    return label;
};
