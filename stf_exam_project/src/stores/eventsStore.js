import { defineStore } from "pinia";

export const useEventStore = defineStore("events", {
  state() {
    return {
      eventsArr: [],
      sortedEvents: [],
      closestEvent: undefined,
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
          query STFevents{
            sTFevents{
              eventImgs {
                url
              }
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
          // this.eventsArr = data.data.sTFevents;
          console.log(this.eventsArr);
          const eventsDates = [];
          const formattedDates = [];
          const currentDate = Date.parse(new Date());
          console.log(currentDate);

          const unformattedArr = data.data.sTFevents;
          unformattedArr.forEach((unforEvent) => {
            console.log(unforEvent);
            const evntUnDate = unforEvent.sideEventText.eventStart;
            const evntUnDate2 = unforEvent.sideEventText.eventEnd;

            const dateArr = evntUnDate.split(/[/:\-T]/);
            const dateArr2 = evntUnDate2.split(/[/:\-T]/);
            const formatEventDate = {
              id: unforEvent.mainEventComp.id,
              eventStartH: `${dateArr[3]}:${dateArr[4]}`,
              eventStartD: `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`,
              eventEndH: `${dateArr2[3]}:${dateArr2[4]}`,
              eventEndD: `${dateArr2[2]}-${dateArr2[1]}-${dateArr2[0]}`,
            };
            formattedDates.push(formatEventDate);
          });

          console.log(formattedDates);

          formattedDates.forEach((formDate) => {
            const object = data.data.sTFevents.find(
              (elm) => elm.mainEventComp.id === formDate.id
            );
            const fullEvent = {
              event: object,
              eventTime: formDate,
            };
            this.eventsArr.push(fullEvent);
          });

          console.log(this.eventsArr);

          this.eventsArr.forEach((event) => {
            const dateEvent = Date.parse(event.event.sideEventText.eventStart);
            console.log(event.event);
            console.log(event.event.id);
            console.log(event.event.sideEventText.eventStart);
            console.log(dateEvent);
            const dateDifference = dateEvent - currentDate;
            if (dateDifference >= 0) {
              const eventObj = {
                date: dateEvent,
                id: event.event.id,
                dif: dateDifference,
              };
              eventsDates.push(eventObj);
            }
          });
          console.log(eventsDates);
          this.sortedEvents = eventsDates.sort(this.sortDates);
          console.log("arrSorted");
          console.log(this.sortedEvents);

          const closest = this.eventsArr.find(
            (event) => event.id === this.sortedEvents[0].id
          );
          console.log(closest);
          this.closestEvent = closest;
        });
    },
    sortDates(a, b) {
      if (a.dif < b.dif) {
        return -1;
      }
      if (a.dif > b.dif) {
        return 1;
      }
      return 0;
    },
  },
  getters: {},
});
