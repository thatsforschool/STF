import { defineStore } from "pinia";

export const useImgStore = defineStore("imgs", {
  state() {
    return {
      imgsArr: [],
      networkingImg: [],
      membershipImg: [],
      contactImg: [],
      fundsImg: [],
      heroImg: undefined,
      regForm: undefined,
      logo: undefined,
    };
  },
  actions: {
    getData() {
      this.magazinesArr = ["some", "array"];
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` 
          query Imgs{
            imgs{
              imgId
              img{
                url
              }
              page
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
          this.imgsArr = data.data.imgs;
          console.log(this.imgsArr);

          this.imgsArr.forEach((img) => {
            if (img.page === "networking") {
              this.networkingImg.push(img);
            }
            if (img.page === "projectFunds") {
              this.fundsImg.push(img);
            }
            if (img.imgId === "heroImg") {
              this.heroImg = img;
              console.log(this.heroImg);
            }
            if (img.imgId === "registrationForm") {
              this.regForm = img;
              console.log(this.regForm);
            }
            if (img.imgId === "bubblesLogo") {
              this.logo = img;
              console.log(this.logo);
            }
          });
          console.log(this.networkingImg);
        });
    },
  },
  getters: {},
});
