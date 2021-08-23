import { getAllPostIds, getPostData } from "~/src/scripts/projects";
import { useRouter } from "next/router";
import styled from "styled-components";

interface CommonData {
  id:string;
}

const CommonProjects = ({ postData }) => {
  const router = useRouter();
  return (
    <Wrap>
    <Indent>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
    </Indent>
    <Flex>
      <Symbol>
        {postData.categoly != 3 ? 
          <Img src={process.env.basePath + "/images/photo-" + postData.id + ".jpg"} alt="宣材写真"/>
          :
          <Img src={process.env.basePath + postData.photo} alt="宣材写真"/>
        }
        
      </Symbol>
      <Text>
        <Center>
          <Subject>{postData.title}</Subject>
        </Center>
        <Explain>{postData.textup}</Explain>
        <Introduce>
          <li>{postData.schedule1}</li>
          <li>{postData.schedule2}</li>
        </Introduce>
      </Text>
    </Flex>
    <Center>
      <Flex2>
        <Image src={process.env.basePath +"/images/mapIcon.png"} />
        <Location>{postData.building} {postData.floor}階 {postData.location}にて</Location>
      </Flex2>
    </Center>
</Wrap>
  );
}

export const getStaticPaths = async() => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async({ params }) => {
  const postData: CommonData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default CommonProjects;


const Wrap = styled.div`
  color: white;
`;

const Indent = styled.span`
  padding-left: 3%;
`;

const Button = styled.a`
  border: 4px solid #ffffff;
  margin-top: 4px;
  border-radius: 150px;
  background: #fff;
  color: black;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  padding: 6px;

  :hover {
    color: #fff;
    background: #1a1a1a;
  }
  @media screen and (max-width: 767px) {
    padding: 2px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 7vw;
  padding-bottom: 10vw;
  @media screen and (max-width: 730px) {
    display: block;
  }
`;

const Flex2 = styled.div`
  display: flex;
  padding-top: 7vw;
  padding-bottom: 10vw;
  position: relative;
  @media screen and (max-width: 730px) {
    
  }
`;

const Location = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%)translateX(-50%);
  -webkit-transform: translateY(-50%)translateX(-50%);
`;

const Image = styled.img`
  width:40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%)translateX(-50%);
  -webkit-transform: translateY(-50%)translateX(-50%);
  @media screen and (max-width: 730px) {
    left:10%;
  }
`;

const Symbol = styled.article`
  width: 30%;
  margin:0 auto;
  text-align: center;
`;

const Img = styled.img`
  width: 70%;
`;

const Text = styled.aside`
  margin-top: 5vw;
  margin-right: 60px;
  width: 60%;
  @media screen and (max-width: 730px) {
    width: 100%;
  }
`;

const Center = styled.div`
  text-align: center;
  padding-left: 4%;
  padding-right: 4%;
`;

const Subject = styled.h1`
  border-bottom: 5px solid #bf9d6d;
  color: white;
  display: inline-block;
  @media screen and (max-width: 730px) {
    border-bottom: 3px solid #bf9d6d;
    font-size: 22px;
  }
`;

const Explain = styled.h3`
  display: inline;
  text-decoration: underline;
  color: white;
  @media screen and (max-width: 730px) {
    font-size: 12px;
  }
`;

const Introduce = styled.ul`
  list-style: none;
`;
