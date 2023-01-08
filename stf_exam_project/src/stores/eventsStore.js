import { defineStore } from "pinia";

export const useEventStore = defineStore("events", {
  state() {
    return {
      eventsArr: [],
    };
  },
  actions: {
    getData() {
      this.eventsArr = ["some", "array"];
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` 
          query STFevents{
            sTFevents{
              mainEventComp {
                id
                eventTitle
                eventTxtIntro
                eventMainTxt{
                  markdown
                }
              }
              sideEventText{
                eventStart
                eventEnd
                multipleDaysEvent
                eventFree
                eventPrice
                eventPlaceTxt
                eventPlace{
                  latitude
                  longitude
                }
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
          this.eventsArr = data;
        });
    },
  },
  getters: {},
});
