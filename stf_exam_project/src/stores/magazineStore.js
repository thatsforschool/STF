import { defineStore } from "pinia";

export const useMagazineStore = defineStore("magazines", {
  state() {
    return {
      magazinesArr: [],
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
          query MembersMagazine {
            membersMagazines{
              magazineTitle
              magazineCover {
                url
              }
              magazineLink
              magazineDownload {
             url
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
          console.log(data);
          this.magazinesArr = data;
        });
    },
  },
  getters: {},
});