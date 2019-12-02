<template>
  <div class="blogpost" :class="{heightlighted: post.heightlighted}">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <p class="meta">written by {{ post.author }} on {{ post.date }}</p>
    <p v-if="post.heightlighted">This post is heightlighted!</p>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
export interface Post {
  title: string;
  body: string;
  author: string;
  datePosted: Date;
  heightlighted?: boolean;
}

@Component
export default class BlogPost extends Vue {
  @Prop() private post!: Post

  get date() {
    return `${this.post.datePosted.getDay()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`
  }

}
</script>

<style lang="stylus">
.blogpost
  &.heightlighted
    border 1px solid #f4d942
    background-color #fff3b2
  h2
    text-direction underline
  .meta
    font-style italic


</style>
