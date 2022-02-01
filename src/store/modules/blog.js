
const getDefaultState = () => {
  return {
    blogID: 1,
    blogTitle: '标题',
    author: 'x1aY',
    authorAvatar: '用户头像',
    createTime: '2022-01-01 00:00',
    blogPic: '文章封面',
    blogType: '文章类型',
    desc: '文本概述',
    thumbs: 0,
    views: 0,
    content: '文章内容'
  }
}

const state = getDefaultState()

const mutations = {
  SET_BLOG_ID: (state, blogID) => {
    state.blogID = blogID
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
  SET_CONTENT: (state, content) => {
    state.content = content
  }
}

const actions = {
  setCurrBlog({ commit }, blogInfo) {
    const { blogID, title, author, authorAvatar, createTime, blogPic, content } = blogInfo
    return new Promise(resolve => {
      commit('SET_BLOG_TITLE', title)
      commit('SET_BLOG_ID', blogID)
      commit('SET_AUTHOR', author)
      commit('SET_AUTHOR_AVATAR', authorAvatar)
      commit('SET_CREATE_TIME', createTime)
      commit('SET_BLOG_PIC', blogPic)
      commit('SET_CONTENT', content)
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

