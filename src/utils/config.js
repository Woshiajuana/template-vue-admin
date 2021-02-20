

export default {

    // 普通任务类型
    TASK_TYPE_ORDINARY: 'ORDINARY',

    // 任务状态
    TASK_STATUS: {
        W: 'W',
        C: 'C',
        O: 'O',
    },
    TASK_STATUS_TIP: {
        W: '待办中',
        C: '已完成',
        O: '已逾期',
    },

    // 证件类型
    CERTIFICATE_TYPE : [
        { label: '身份证', value: 'ID' },
        { label: '护照', value: 'PASSPORT' },
        { label: '军官证', value: 'MILITARY' },
        { label: '士兵证', value: 'SOLDIER' },
        { label: '回乡证', value: 'HVPS' },
        { label: '临时身份证', value: 'TEMPID' },
        { label: '户口簿', value: 'BOOKLET' },
        { label: '警官证', value: 'POLICEID' },
        { label: '台胞证', value: 'MTPS' },
        { label: '营业执照', value: 'LICENSE' },
        { label: '其他', value: 'OTHER' },
        { label: '武警证', value: 'APOLICE' },
        { label: '港澳通行证', value: 'HMPASS' },
        { label: '学生证', value: 'SCARD' },
        { label: '工作证', value: 'WCARD' },
        { label: '工商执照', value: 'BLICENSE' },
        { label: '事业单位编码', value: 'UTILITY' },
        { label: '房产证', value: 'HOUSE' },
        { label: '组织机构编码', value: 'ORGCODE' },
    ],

    // 性别
    GENDER: {
        M: '男',
        F: '女',
        N: '未知',
    },

    // 数据权限
    ROLE_DATA_AUTH: [
        { label: '全部', value: 0 },
        { label: '自定义', value: 1 },
        { label: '本级及子级', value: 2 },
        { label: '本级', value: 3 },
        { label: '个人', value: 4 },
    ],

    // 两个特殊的产品类型编号
    PRODUCT_TYPE: {
        JI_JIN: '15A5J3LVGJ002', // 基金类
        LI_CAI: '15A5J21E4J003', // 理财类
    },

    // 风险等级
    RISK_LEVEL: {
        R1: 'R1',
        R2: 'R2',
        R3: 'R3',
        R4: 'R4',
        R5: 'R5',
    },

    // 资产评级
    ASSET_LEVEL: {
        L1: '普通客户',
        L2: '郁金香客户',
        L3: '金卡客户',
        L4: '白金卡客户',
        L5: '财富客户',
        L6: '私行客户',
    },

    // 符号
    SYMBOL: {
        '0': '<',
        '1': '<=',
    },


    // 权限凭证
    PERMISSIONS: {

        // 首页(分行领导/零售部)
        VIEW_BRANCH_LEADER: 'VIEW_BRANCH_LEADER',

        // 首页(支行领导)
        VIEW_SUBBRANCH_LEADER: 'VIEW_SUBBRANCH_LEADER',

        // 首页(客户经理)
        VIEW_CUSTOMER_MANAGER: 'VIEW_CUSTOMER_MANAGER',

        // 可以添加任务
        DO_TASK_ADDED: 'DO_TASK_ADDED',

        // 可以删除任务
        DO_TASK_DELETE: 'DO_TASK_DELETE',

        // 可修改分行支行
        UPDATE_CUSTOMER_SUBBRANCH: 'UPDATE_CUSTOMER_SUBBRANCH',

        // 可修改归属客户经理
        UPDATE_CUSTOMER_MANAGER: 'UPDATE_CUSTOMER_MANAGER',

        // 可修改家庭住址&工作单位
        UPDATE_CUSTOMER_ADDRESS_COMPANY: 'UPDATE_CUSTOMER_ADDRESS_COMPANY',

        // 可以新增账户
        DO_ACCOUNT_ADDED: 'DO_ACCOUNT_ADDED',

        // 可以重置密码
        DO_PASSWORD_RESET: 'DO_PASSWORD_RESET',

        // 可以编辑账户
        DO_ACCOUNT_EDIT: 'DO_ACCOUNT_EDIT',

        // 可以添加信息资讯
        DO_INFORMATION_ADDED: 'DO_INFOMATION_ADDED',

        // 可以编辑信息资讯
        DO_INFORMATION_UPDATE: 'DO_INFOMATION_UPDATE',

        // 可以删除信息资讯
        DO_INFORMATION_DELETE: 'DO_INFORMATION_DELETE',

        // 可以新增产品
        DO_PRODUCT_ADDED: 'DO_PRODUCT_ADDED',

        // 可以编辑产品
        DO_PRODUCT_UPDATE: 'DO_PRODUCT_UPDATE',

        // 可以删除产品
        DO_PRODUCT_DELETE: 'DO_PRODUCT_DELETE',

        // 可以关联产品
        DO_PRODUCT_RELATION: 'DO_PRODUCT_RELATION',

        // 资金量导出
        DO_CAPITAL_EXPORT: 'DO_CAPITAL_EXPORT',

    },

}
