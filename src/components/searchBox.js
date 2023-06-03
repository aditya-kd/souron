import React, {useState} from 'react';

function SearchBox () {
    const [dropdownValue, setDropdownValue] = useState('');
    const [textInput1, setTextInput1] = useState('');
    const [textInput2, setTextInput2] = useState('');
    const [submittedData, setSubmittedData] = useState('');

    const handleDropdownChange = (e) => {
        setDropdownValue(e.target.value);
    };
    
    const handleTextChange1 = (e) => {
        setTextInput1(e.target.value);
    }

    const handleTextChange2 = (e) => {
        setTextInput2(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input_data = dropdownValue + textInput1 + textInput2;
        

        try{
            // Actual URL here in fetch()
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
            const jsonString = JSON.stringify(data);

            setSubmittedData(input_data + jsonString);
        }catch(error){
            console.error('Error fetching JSON:', error);
        }
    }

    return (
        <div className='souronContainer'>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-row'>
            <select value={dropdownValue} onChange={handleDropdownChange} disabled>
              <option value="">Container ID</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <input type="text" value={textInput1} onChange={handleTextChange1} />
            </div>
            <input type="text" value={textInput2} onChange={handleTextChange2} />
            <button type="submit">Submit</button>
          </form>
          {submittedData && <p>Submitted Data: {submittedData}</p>}
        </div>
      );
}
export default SearchBox;