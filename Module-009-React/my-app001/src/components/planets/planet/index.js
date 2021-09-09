import React, {Fragment} from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/description_with_link'

const Planet = (props) => {
    const names = ['a', 'b', 'c', 'd','Lua']
    const satellites = names.map((n)=>
        <li>Satélite: {n}</li>
    )

    let title
    if(props.title_with_underline){
        title = <h4><u>{props.name}</u></h4>
    }else{
        title = <h4>{props.name}</h4>
    }
    return (
        <div/*{Colocando essa função anonima que chama a outra função sem disparar o evento onClick=() => props.clickOnPlanet(props.name)}*/>
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray} />

            <h4>Satélites</h4>
            <ul>
                {satellites}
            </ul>

            <ul><li>Outro Modo:</li></ul>
            <ul>{/*Fazendo Mapeamento direto aqui, até o array poderia colocar aqui*/ }
                {
                names.map((n)=>
                <li>Satélite: {n}</li>
                )}
            </ul>
            <hr/>

            
        </div>
    )
}

export default Planet