import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
  state() {
    return {
      newsArr: [],
      sortedNewsArr: [],
      sortedPress: [],
      restNewsArt: [],
      sortedVideos: [],
    };
  },
  actions: {
    getData() {
      this.newsArr = ["some", "arr"];

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` 
          query NewsArticle {
            newsArticles{
              link
              id
              publicationDate
              hasAuthor
              author
              articleTitle
              articleIntro
              articleTypes
              articleMainImage {
                url
              }
              mainText{
                raw
              }
            }
          }`,
        }),
      };
      fetch(
        "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcf6iawh011l01uj640w5hru/master",
        options
      )
        .then((res) => res.json())
        .then((data) => {
          this.newsArr = data.data.newsArticles;
          console.log(this.newsArr);
          if (this.newsArr.length > 0) {
            let recentNews = this.newsArr.filter(
              (article) => article.articleTypes == "news_article"
            );
            console.log(`recent news ${recentNews[0].articleTitle}`);
            console.log(`recent news ${recentNews[0].publicationDate}`);
            console.log(recentNews);

            this.sortedNewsArr = recentNews.sort(this.sortDates);
            console.log("arrSorted");
            console.log(this.sortedNewsArr);

            let recentPress = this.newsArr.filter(
              (press) => press.articleTypes == "pdf_materials"
            );
            console.log(`recent news ${recentPress[0].articleTitle}`);
            console.log(`recent news ${recentPress[0].publicationDate}`);
            console.log(recentPress);

            this.sortedPress = recentPress.sort(this.sortDates);
            console.log("arrSorted");
            console.log(this.sortedPress);

            let recentVideos = this.newsArr.filter(
              (video) => video.articleTypes == "video_material"
            );
            console.log(`recent news ${recentVideos[0].articleTitle}`);
            console.log(`recent news ${recentVideos[0].publicationDate}`);
            console.log(recentVideos);

            this.sortedVideos = recentVideos.sort(this.sortDates);
            console.log("arrSorted");
            console.log(this.sortedVideos);

            for (let i = 2; i < this.sortedNewsArr.length; i++) {
              this.restNewsArt.push(this.sortedNewsArr[i]);
            }
            console.log(this.restNewsArt)
          }
        });
    },

    sortDates(a, b) {
      if (a.publicationDate < b.publicationDate) {
        return 1;
      }
      if (a.publicationDate > b.publicationDate) {
        return -1;
      }
      return 0;
    },
  },
  getters: {},
});
