<template>
    <section>
      <article>
        <iframe :src="videoLink" frameborder="0" />
        <h3>{{ headline }}</h3>
        <p class="intro">{{ intro }}</p>
        <p>{{ publicationDate }}</p>
        <address>
          <p>{{ author }}</p>
        </address>
      </article>
      <a class="moreArr" :href="videoLink"
        >Watch <i class="fa-solid fa-arrow-right"></i>
      </a>
    </section>
  </template>
  <script>
  export default {
    name: "videoComp",
    props: {
      videoLink: String,
      headline: String,
      intro: String,
      publicationDate: String,
      author: String,
    },
  };
  </script>
  <style scoped>
  article {
    width: 500px;
    height: 550px;
  }
  iframe {
    width: 500px;
    height: 300px;
  }
  h3 {
    margin: 30px 0;
  }
  
  .moreArr {
    margin-left: 400px;
    display: inline-block;
    color: var(--darkBlue);
  }
  .moreArr:hover {
    color: var(--blue);
  }
  
  
  .intro {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    width: 500px;
    height: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>