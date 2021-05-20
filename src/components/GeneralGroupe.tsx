import  styled  from 'styled-components';
import { FC } from 'react';
import Title from "../components/Title";
import Underline from "../components/Underline"
const GeneralGroupe:FC =()=>{
    return(
        <div>
            <Underline><Title big="" small=""></Title></Underline>
            <ProgramImage></ProgramImage>
            <Introduce></Introduce>
            <Underline><ClubName></ClubName></Underline>
            <ClubIntroduce></ClubIntroduce>
            <ClubImage></ClubImage>
        </div>
    )
}

const ProgramImage =styled.img`
`

const Introduce = styled.nav`
`

const ClubName = styled.h3`
`

const ClubIntroduce = styled.nav`
`

const ClubImage = styled.img`
`


export default GeneralGroupe