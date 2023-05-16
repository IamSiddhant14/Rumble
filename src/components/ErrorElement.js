import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {

    const err = useRouteError();
    return (
        <div>
            {` We fucked up ${err}`}
        </div>
    )
}

export default ErrorElement ;
