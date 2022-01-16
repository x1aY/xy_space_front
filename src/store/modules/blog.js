
const getDefaultState = () => {
  return {
    blogId: 1,
    blogTitle: '标题',
    author: 'x1aY',
    authorAvatar: '用户头像',
    createTime: '2022-01-01 00:00',
    blogPic: '文章封面',
    blogInfo: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_BLOG_ID: (state, blogId) => {
    state.blogId = blogId
  },
  SET_BLOG_TITLE: (state, blogTitle) => {
    state.blogTitle = blogTitle
  },
  SET_AUTHOR: (state, author) => {
    state.author = author
  },
  SET_AUTHOR_AVATAR: (state, authorAvatar) => {
    state.authorAvatar = authorAvatar
  },
  SET_CREATE_TIME: (state, createTime) => {
    state.createTime = createTime
  },
  SET_BLOG_PIC: (state, blogPic) => {
    state.blogPic = blogPic
  },
  SET_BLOG_INFO: (state, blogInfo) => {
    state.blogInfo = blogInfo
  }
}

const actions = {
  setCurrBlog({ commit }, blogInfo) {
    const { blogId, title, author, authorAvatar, createTime, blogPic } = blogInfo
    return new Promise(resolve => {
      commit('SET_BLOG_TITLE', title)
      commit('SET_BLOG_ID', blogId)
      commit('SET_AUTHOR', author)
      commit('SET_AUTHOR_AVATAR', authorAvatar)
      commit('SET_CREATE_TIME', createTime)
      commit('SET_BLOG_PIC', blogPic)
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

