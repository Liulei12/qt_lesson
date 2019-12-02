<template>
  <div id="app">
    <button @click="toggle">Show/Hide heightlighted post</button>
    <BlogPost :post="blogPost" v-for="blogPost in visibleBlogPosts" :key="blogPost.title"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlogPost from './components/blog.vue';
import { Post } from './components/blog.vue';
import { AxiosResponse } from 'axios';
import axios from 'axios';

@Component({
  components: {
    BlogPost
  },
})
export default class App extends Vue {

  private blogPosts: Post[] = []
  public showHeightlighted: boolean = true

  get visibleBlogPosts() {
    return this.blogPosts.filter((post: Post) => {
      return post.heightlighted === undefined || post.heightlighted === this.showHeightlighted
    })
  }
  public toggle() {
    this.showHeightlighted = !this.showHeightlighted
  }

  public created() {
    axios.get('/request.json').then((res :AxiosResponse) => {
      this.blogPosts = res.data.blogposts.map((val: any) => ({
        title: val.title,
        body: val.body,
        author: val.author,
        datePosted: val.datePosted,
        heightlighted: val.heightlighted
      }))
    })
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
