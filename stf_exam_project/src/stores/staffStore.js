import { defineStore } from "pinia";

export const useStaffStore = defineStore("staffMembrs", {
  state() {
    return {
      membrsArr: [],
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
          query StaffMember{
            staffMembers{
                photo{
                    url
                }
              name
              phone
              email
              position
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
          this.membrsArr = data.data.staffMembers;
          console.log(this.membrsArr);

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
