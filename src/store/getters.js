const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    // permission_routes: state => state.permission.routes,
    userInfo: state => state.user.userInfo,
    menus: state => state.user.menus,
    permissions: state => state.user.userInfo.permissions || [],
};
export default getters
