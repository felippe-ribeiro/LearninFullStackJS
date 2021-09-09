import React, { Fragment } from 'react'
import Planet from './planet'

//exemplo de evento onclick
/*const showMessage = () => {
    console.log('Meu primeiro evento')
}*/

/*Exemplo 2 Eventos const clickOnPlanet = (name) => {
    console.log(`Um clique no planeta: ${name}`)
}*/

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            {/* Exemplo de evento onClick
            <button onClick={showMessage}>Show Message</button>*/}
            <hr />
            <Planet name="Mercúrio"
                //description="Teste...Teste"
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
                link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)" 
                /*clickOnPlanet={clickOnPlanet}*/
                title_with_underline={true}
                />
            <Planet name="Lua"
                description="Teste2.Teste2"
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/280px-FullMoon2010.jpg"
                /*link="https://pt.wikipedia.org/wiki/Lua" 
                /*clickOnPlanet={clickOnPlanet}*/
                gray={true}/>

        </Fragment>
    )
}

export default Planets