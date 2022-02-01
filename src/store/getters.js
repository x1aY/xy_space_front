const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  blogID: state => state.blog.blogID,
  blogTitle: state => state.blog.blogTitle,
  blogAuthor: state => state.blog.author,
  blogAuthorAvatar: state => state.blog.authorAvatar,
  blogCreateTime: state => state.blog.createTime,
  blogPic: state => state.blog.blogPic,
  blogContent: state => state.blog.content
}
export default getters
