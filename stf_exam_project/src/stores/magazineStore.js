import { defineStore } from "pinia";

export const useMagazineStore = defineStore("magazines", {
  state() {
    return {
      magazinesArr: [],
      sortedMagazinesArrr: [],
      lastestMagazine: undefined,
      magazineYears: [],
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
              tema
              publicationDate
              year
              month
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
          this.magazinesArr = data.data.membersMagazines;
          this.sortedMagazinesArrr = this.magazinesArr.sort(this.sortDates);
          console.log("arrSorted");
          console.log(this.sortedMagazinesArrr);

          this.lastestMagazine = this.sortedMagazinesArrr[0];
          this.magazineYears = this.getYear(this.sortedMagazinesArrr);
          console.log(this.magazineYears);
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
    getYear(arr) {
      const newArr = [];
      arr.forEach((elm) => {
        newArr.push(elm.year);
      });
      let yearsArr = [...new Set(newArr)];
      return yearsArr;
    },
  },
  getters: {},
});
