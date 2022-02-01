<template>
  <div id="blog">
    <el-row>
      <el-col :offset="3" :span="18">
        <!--header-->
        <div class="ui top attached segment">
          <div class="ui middle aligned two column grid my-shadow">
            <div class="column">
              <h3 class="ui my-blue header">博客</h3>
            </div>
            <div class="right aligned column"><h4
              class="ui header m-inline-block m-text"
              v-if="pagination.sortVal!=='' && pagination.sortVal!==null"
              style="height: 1px !important;">根据 {{pagination.sortVal}} 排序的搜索结果</h4>
              共 <h2 class="ui orange header m-inline-block m-text-thin">{{pagination.totalBlog}}</h2> 篇
            </div>
          </div>
        </div>

        <!--content-->
        <div class="ui attached  segment my-blog-shadow">

          <div class="ui padded vertical segment m-padded-tb-large" v-for="blogOne in blogList" :key="blogOne.blogID">
            <div class="ui middle aligned mobile reversed stackable grid">
              <div class="eleven wide column" style="cursor:pointer;">
                <h3 class="ui header" @click="toBlog(blogOne.blogID)">{{blogOne.title}}</h3>
                <p class="m-text" @click="toBlog(blogOne.blogID)">{{blogOne.desc}}</p>
                <div class="ui grid">
                  <div class="eleven wide column">
                    <div class="ui mini horizontal link list">
                      <div class="item">
                        <img :src=blogOne.authorAvatar class="ui avatar image" alt="作者头像">
                        <div class="content"><a class="header">{{blogOne.author}}</a></div>
                      </div>
                      <div class="item">
                        <i class="calendar icon"></i> {{blogOne.createTime}}
                      </div>
                      <div class="item">
                        <i class="eye icon"></i> {{blogOne.views}}
                      </div>
                      <div class="item">
                        <i class="thumbs up outline icon"></i> {{blogOne.thumbs}}
                      </div>
                    </div>
                  </div>
                  <div class="right aligned five wide column">
                    <a target="_blank" class="ui my-blue basic label m-padded-tiny m-text-thin">{{blogOne.blogType}}</a>
                  </div>
                </div>
              </div>
              <div class="five wide column">
                <a target="_blank">
                  <img :src=blogOne.blogPic @click="toBlog(blogOne.blogID)" alt="文章封面" class="ui rounded image">
                </a>
              </div>

            </div>
          </div>

        </div>

        <!--footer-->
        <div class="ui bottom attached segment my-blog-shadow">
          <div class="pagination-container">
            <el-pagination
              class="pagiantion"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pagination.currPage"
              :page-sizes="[6,10,15]"
              :page-size="pagination.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pagination.totalBlog"/>
          </div>
        </div>

      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>

<script>
import { getBlogList, getBlogBaseInfo } from '@/api/blog'
import myAvatar from '@/assets/myAvatar.jpg'
import Footer from '@/layout/components/Footer'

export default {
  name: 'Blog',
  components: { Footer },
  data() {
    return {
      myAvatar,
      sortItems: [{
        sortKey: null,
        sortVal: null
      }],
      pagination: { // 分页相关模型数据
        currPage: 1, // 当前页码
        pageSize: 6, // 每页显示的记录数
        totalPage: 0, // 总记录数
        totalBlog: 0,
        queryStr: null,
        sortKey: null,
        sortVal: null,
        sortOrder: null
      },
      blogList: [
        {
          blogID: 0,
          title: '标题',
          desc: '描述',
          authorAvatar: '作者头像',
          author: '作者',
          createTime: '创建时间',
          views: '播放数',
          thumbs: '点赞数',
          blogType: '博客类型',
          blogPic: '文章封面',
          content: '文章内容'
        }
      ]
    }
  },
  created() {
    this.blogInfo(this.pagination.pageSize)
    this.currPage(this.pagination)
  },
  methods: {
    async blogInfo(pageSize) {
      getBlogBaseInfo(pageSize).then(data => {
        this.pagination.totalBlog = data.totalBlog
        this.pagination.totalPage = data.totalPage
      })
    },
    async currPage(pagination) {
      getBlogList(pagination).then(data => {
        console.log(data)
        this.blogList = data.blogList
      })
    },
    toBlog(blogID) {
      const blogInfo = this.blogList.find(blogOne => blogOne.blogID === blogID)
      console.log(blogInfo)
      this.$store.dispatch('blog/setCurrBlog', blogInfo).then(() => {
        this.$router.push('/blog/detail')
      })
    },
    handleCurrentChange(currentPage) {
      this.pagination.currPage = currentPage
      this.currPage(this.pagination)
    },
    handleSizeChange(newSize) {
      this.pagination.pageSize = newSize
      this.currPage(this.pagination)
    }
  }
}
</script>

<style scoped>
  .loginDiv {
    text-align: center;
    color: #ffffff;
  }
</style>

