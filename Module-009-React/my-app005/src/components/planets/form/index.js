import React, { Fragment, useState } from 'react'

const initialState = {
    name: '',
    description: '',
    link: '',
    img_ur: '',
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState)
    const handleFieldsChange = (evento) => setFields({
        ...fields,
        [evento.currentTarget.name]: evento.currentTarget.value
    })

    const handleSubmit = evento => {
        props.addPlanet(fields)
        evento.preventDefault()
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="link">link:</label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="img_url">img_url:</label>
                    <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange} />
                </div>

                <input type="submit" />
            </form>
        </Fragment>
    )
}

export default Form