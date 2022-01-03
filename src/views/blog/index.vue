<template>
  <div id="blog">
  <el-row><el-col :offset="3" :span="18">
    <!--header-->
    <div class="ui top attached segment">
      <div class="ui middle aligned two column grid my-shadow">
        <div class="column">
          <h3 class="ui my-blue header" >博客</h3>
        </div>
        <div class="right aligned column"><h4
            class="ui header m-inline-block m-text"
            v-if="pagination.queryString!=='' && pagination.queryString!==null"
            style="height: 1px !important;">根据"{{pagination.queryString}}"的搜索结果</h4>
          共 <h2 class="ui orange header m-inline-block m-text-thin">{{pagination.total}}</h2> 篇
        </div>
      </div>
    </div>

    <!--content-->
    <div class="ui attached  segment my-blog-shadow">

      <div class="ui padded vertical segment m-padded-tb-large" v-for="item in dataList" :key="item.blogId">
        <div class="ui middle aligned mobile reversed stackable grid">
          <div class="eleven wide column" style="cursor:pointer;">
            <h3 class="ui header" @click="toBlog(item.blogId)">{{item.title}}</h3>
            <p class="m-text" @click="toBlog(item.blogId)">{{item.description}}</p>
            <div class="ui grid">
              <div class="eleven wide column">
                <div class="ui mini horizontal link list">
                  <div class="item">
                    <img v-bind:src=item.avatar class="ui avatar image">
                    <div class="content"><a class="header">{{item.nickname}}</a></div>
                  </div>
                  <div class="item">
                    <i class="calendar icon"></i> {{item.createTime}}
                  </div>
                  <div class="item">
                    <i class="eye icon"></i> {{item.views}}
                  </div>
                  <div class="item">
                    <i class="thumbs up outline icon"></i> {{item.thumbs}}
                  </div>
                </div>
              </div>
              <div class="right aligned five wide column">
                <a target="_blank" class="ui my-blue basic label m-padded-tiny m-text-thin">{{item.typeName}}</a>
              </div>
            </div>
          </div>
          <div class="five wide column">
            <a target="_blank">
              <img v-bind:src=item.firstPicture @click="toBlog(item.blogId)" alt="" class="ui rounded image">
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
          :current-page="pagination.currentPage"
          :page-sizes="[2,6,10,15]"
          :page-size="pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagination.total">
        </el-pagination>
      </div>
    </div>

  </el-col></el-row>
  </div>
</template>

<script>
import { getBlogList } from '@/api/blog'
export default {
  name: 'Blog',
  data() {
    return {
      pagination: { // 分页相关模型数据
        currentPage: 1, // 当前页码
        pageSize: 6, // 每页显示的记录数
        total: 0, // 总记录数
        queryString: null // 查询条件
      },
      dataList: [] // 当前页要展示的博客分页列表数据
    }
  },
  created() {
    getBlogList().then(data => {
      console.log(data)
    })
    // this.findPage()
  },
  methods: {
    // 分页查询
    async findPage() {
      const str = sessionStorage.getItem('queryString')
      if (str !== null) {
        this.pagination.queryString = str
        sessionStorage.removeItem('queryString')
        this.$message.info('搜索结果已经显示在页面下方')
      }
      const param = {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
        queryString: this.pagination.queryString
      }
      var param2 = this.$encrypTion(JSON.stringify(param))
      const { data: res } = await this.$http.post('/api/server/home/findHomePage', param2)
      if (!res.flag) {
        return this.$message.error('获取博客列表失败！')
      }
      this.pagination.total = res.data.total
      this.dataList = res.data.records
    },
    // TODO
    toBlog(blogId) {
      sessionStorage.setItem('blogId', blogId)
      this.$router.push('/blog/detail/{blogId}')
    },
    handleCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage
      this.findPage()
    },
    handleSizeChange(newSize) {
      this.pagination.pageSize = newSize
      this.findPage()
    }
  }
}
</script>

<style scoped>
.loginDiv{
  text-align: center;
  color: #ffffff;
}
</style>

