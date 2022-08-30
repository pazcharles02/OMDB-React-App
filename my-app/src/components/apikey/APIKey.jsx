import React from "react";
import "./APIKey.css"

function APIKey(props) {
    const apiKey = props.apiKey;
    const setApiKey = props.setApiKey;

    return (
        <section id={"api_key"}>
            <textarea onChange={event => setApiKey(event.target.value)} value={apiKey}/>
        </section>
    )
}

export default APIKey;