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
      { img: "/images/95839.png", com1: "あ", com2: "い", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/95941.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/95942.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
    ],
  },

  { id:"一般参加団体",
    contents: [
      { img: "/images/95839.png", com1: "あ", com2: "い", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/95941.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/95942.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
    ],
},

  { id:"音響団体",
    contents: [
      { img: "/images/95839.png", com1: "あ", com2: "い", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/95941.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/95942.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
    ],
  },

  { id:"桐朋祭委員会",
    contents: [
      { img: "/images/95839.png", com1: "あ", com2: "い", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/95941.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
      { img: "/images/95942.jpg", com1: "", com2: "", com3: "", com4: "", com5: "", com6: "" },
    ],
  },

]