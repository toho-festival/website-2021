export type Content = {
  img:string,
  com1:string,
  com2:string,
  com3:string,
  com4:string,
  com5:string,
  com6:string,
}

export type Categoly = {
  id:string
  contents:Content[]
}

export const resultCategoly:Categoly[] = [
  { id:"ステージ",
    contents: [
      { img: "/images/afterStage1.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterStage2.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterStage3.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterStage4.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
    ],
  },

  { id:"一般参加団体",
    contents: [
      { img: "/images/group1.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/group2.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/group3.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/group4.jpeg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
    ],
},

  { id:"音響団体",
    contents: [
      { img: "/images/afterBand1.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterBand2.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterBand3.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterBand4.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
    ],
  },

  { id:"桐朋祭委員会",
    contents: [
      { img: "/images/afterCommittee1.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterCommittee2.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterCommittee3.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/afterCommittee4.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
    ],
  },

]