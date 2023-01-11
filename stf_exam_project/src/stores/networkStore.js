import { defineStore } from "pinia";

export const useNetworkStore = defineStore("networks", {
  state() {
    return {
      networksArr: [],
    };
  },
  actions: {
    getData() {
      this.networksArr = ["some", "array"];
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` 
          query STFNetworks{
            stfNetworks{
              networkName
              networkIntro
              networkArticleText {
                markdown
              }
              networkRequirements
              mainImg{
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
          this.networksArr = data.data.stfNetworks;
        });
    },
  },
  getters: {},
});
