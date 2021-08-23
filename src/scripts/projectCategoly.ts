export type MainProps = {
  id:string;
  side: 'right' | 'left';
  right:number;
  left:number;
  categoly:string;
  name:string;
  num:number;
  marginLeft:number;
}

export type SubProps = {
  side:'right' | 'left';
  top:number;
  subSrc:string;
  link:string;
  num:number;
}

export const imageAlignMain: MainProps[] = [
  {id:'',side:'left',right:0,left:10,categoly:"/images/newExperience.png",name:"ExperienceProject",num:0,marginLeft:42},
  {id:'#exhibit',side:'right',right:10 ,left:0  ,categoly:"/images/newExhibit.png",name:"ExhibitProject",num:1,marginLeft:42},
  {id:'#music',side:'left',right:0,left:10,categoly:"/images/newMusic.png",name:"MusicProject",num:2,marginLeft:42},
]

export const imageAlignSub: SubProps[] = [
  {side:'left'  ,top:10  ,subSrc:"/images/newGreetings.png" ,link:"/about#greeting" ,num:0},
  {side:'right' ,top:-5  ,subSrc:"/images/newSchedule.png"  ,link:"/schedule" ,num:1},
  {side:'left'  ,top:-5  ,subSrc:"/images/newProgram.png"   ,link:"/program" ,num:2},
  {side:'right' ,top:-5  ,subSrc:"/images/newCovid19.png"   ,link:"/covid-19" ,num:3},
  {side:'left'  ,top:-5  ,subSrc:"/images/newBlog.png"      ,link:"/blog" ,num:4},
]