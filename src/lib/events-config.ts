import HackerHouseLondon from "../../public/HackerHouseLondon.webp";
import HackerHouseSingapore from "../../public/HackerHouseSingapore.webp";
import KK9RGuinnessWorldRecord from "../../public/KK9R-Guinness-World-Record.webp";

export const EVENTS_CONFIG = [
  {
    route: "kk9r-guinness-world-record",
    title: "KK9R Guinness World Record",
    description:
      "On September 5, 2024, in Goesan, South Korea, 38 dogs from Korean K9 Rescue, in collaboration with Bonk Canada, made history by setting a new Guinness World Record for the most dogs walked simultaneously by a single person.",
    image: KK9RGuinnessWorldRecord,
    links: [
      {
        label: "Guinness World Record Press Release",
        url: "https://www.guinnessworldrecords.com/news/2024/10/pooch-perfect-day-out-for-animal-lover-who-walked-38-dogs-at-once-to-promote-adoption",
      },
      {
        label: "Washington Post Article",
        url: "https://www.washingtonpost.com/lifestyle/2024/10/26/dog-walk-guinness-record-adopt/",
      },
      {
        label: "Medium Article by Cailin Doran",
        url: "https://medium.com/@cbcd/every-paw-helps-244184cb1347",
      },
      {
        label: "World Record Academy",
        url: "https://www.worldrecordacademy.org/2024/10/most-dogs-walked-simultaneously-by-an-individual-world-record-set-in-goesan-south-korea-424424",
      },
      {
        label: "MSN Article",
        url: "https://www.msn.com/en-us/money/markets/canadian-man-sets-new-guinness-world-record-for-most-dogs-walked-at-once/ar-AA1snMCW?apiversion=v2&noservercache=1&domshim=1&renderwebcomponents=1&wcseo=1&batchservertelemetry=1&noservertelemetry=1",
      },
      {
        label: "Turkmenportal Article",
        url: "https://turkmenportal.com/en/blog/83865/canadian-sets-world-record-by-walking-38-dogs#:~:text=Canadian%20Mitchell%20Rudy%20set%20a,them%20out%20of%20his%20sight",
      },
    ],
  },
  {
    route: "london-baobao-charity-fashion-show",
    title: "London BaoBao Charity Fashion Show",
    description:
      "A charity fashion show event held in London, bringing together fashion enthusiasts and philanthropists to support a noble cause.",
    image: HackerHouseLondon,
    links: [],
  },
  {
    route: "singapore-baobao-charity-fashion-show",
    title: "Singapore BaoBao Charity Fashion Show",
    description:
      "A charity fashion show event in Singapore, uniting the community to raise funds and awareness for important causes.",
    image: HackerHouseSingapore,
    links: [],
  },
];
