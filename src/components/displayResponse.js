import React, {useState} from 'react'
// import jsonData from '../response/sample_response_1.json'


function DisplayResponse() {
    const [jsonObject, setJsonObject ] = useState(null);

    const handleButtonClick = async () => {

        /* Static Response */
        // const jsonString = JSON.stringify(jsonData);
        // setJsonObject(jsonString);

        try{
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
            const jsonString = JSON.stringify(data);
            setJsonObject(jsonString);
        }catch(error){
            console.error('Error fetching JSON:', error);
        }
    };
    return (
        <div>
            <button onClick={handleButtonClick}>Show Response</button>
            {jsonObject && <pre>{jsonObject}</pre>}
        </div>
    )
}
export default DisplayResponse;