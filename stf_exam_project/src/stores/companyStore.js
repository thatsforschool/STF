import { defineStore } from "pinia";

export const useCompanyStore = defineStore("companies", {
  state() {
    return {
      companiesArr: [],
    };
  },
  actions: {
    getData() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` 
          query StfMemberCompanies {
            stfMemberCompanies{
              companyName
              companyLink
              companyLogo {
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
          this.companiesArr = data.data.stfMemberCompanies;
          console.log(this.companiesArr);
        });
    },
  },
  getters: {},
});
