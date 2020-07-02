import React from 'react' 

import { Container, Details, Img, Title, Description } from './styles'

import img13 from '../../images/13.png'

export default function Banner () {
    return (
        <Container>
            <Details>
                <Title>Cobre Um Amigo</Title>


                <Description>
                    Mantenha suas parceirias em dia, use o PicPay para fazer suas cobranças.
                </Description>
            </Details>
            <Img source={img13} />
        </Container>
    )
}