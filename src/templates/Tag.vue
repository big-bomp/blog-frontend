<template>
  <Layout>
    <!-- Page Header -->
  <header class="masthead" 
  :style="{
    backgroundImage:`url('${ 'http://120.24.39.185:1337' + $page.tag.posts[0].cover.url }')`
  }">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1># {{ $page.tag.title }}</h1>
            {{ }}
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
          <g-link :to="'/post/' + post.id">
            <h2 class="post-title">
              {{ post.title }}
            </h2>
            <h3 class="post-subtitle">
              Problems look mighty small from 150 miles up
            </h3>
          </g-link>
          <!-- <p class="post-meta">Posted by
           on {{ post.created_at }}
            </p>
          <p>
            <span v-for="tag in post.tags" :key="tag.id">
            <g-link :to="'/tag/' + post.id" > {{ tag.title }}</g-link>
            &nbsp;

            </span>
          </p> -->
        </div>
        <hr>
      </div>
    </div>
  </div>

    
  </Layout>
</template>

<page-query>
query($id: ID!){
  tag: strapiTag(id:$id){
    id
    title
    posts{
      id
      title
      cover{
        url
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'TagPage'
}
</script>

<style>

</style>