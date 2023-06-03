import React, {useState} from 'react'
import jsonData from '../response/sample_response_1.json'


function DisplayResponse() {
    const [jsonObject, setJsonObject ] = useState(null);

    const handleButtonClick = () => {

        const jsonString = JSON.stringify(jsonData);
        setJsonObject(jsonString);
    };
    return (
        <div>
            <button onClick={handleButtonClick}>Show Response</button>
            {jsonObject && <pre>{jsonObject}</pre>}
        </div>
    )
}
export default DisplayResponse;