export type Content = {
  img:string,
}

export type Categoly = {
  id:string
  contents:Content[]
}

export const resultCategoly:Categoly[] = [
  { id:"ステージ",
    contents: [
      { img: "/images/afterStage1.jpg", },
      { img: "/images/afterStage2.jpg", },
      { img: "/images/afterStage3.jpg", },
      { img: "/images/afterStage4.jpg", },
    ],
  },

  { id:"一般参加団体",
    contents: [
      { img: "/images/group1.jpg", },
      { img: "/images/group2.jpg", },
      { img: "/images/group3.jpg", },
      { img: "/images/group4.jpeg", },
    ],
},

  { id:"音響団体",
    contents: [
      { img: "/images/afterBand1.jpg", },
      { img: "/images/afterBand2.jpg", },
      { img: "/images/afterBand3.jpg", },
      { img: "/images/afterBand4.jpg", },
    ],
  },

  { id:"桐朋祭委員会",
    contents: [
      { img: "/images/afterCommittee1.jpg", },
      { img: "/images/afterCommittee2.jpg", },
      { img: "/images/afterCommittee3.jpg", },
      { img: "/images/afterCommittee4.jpg", },
    ],
  },

]