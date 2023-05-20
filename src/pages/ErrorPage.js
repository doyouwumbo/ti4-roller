import React from 'react';
import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    console.error(error);


  return (
    <div className='ErrorPage'>
        <h1>Something went wrong (like always)</h1>
        <p><i>{error.statusText || error.message}</i></p>
    </div>
  )
}

export default ErrorPage