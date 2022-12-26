import React,{useState} from 'react';

let userDetails = {
    name:'',
    age:'',
    course:'',
    batch:''
}

const Student = () => {

    const [store,setStore] = useState(userDetails);
    const [details,setDetails] = useState([]);
    const [edit,setEdit] = useState(false);
    const [remove,setRemove] = useState(false);

const handleEditChanges = (event) => {
    const value = event.target.value
    setStore(store =>({...store,[event.target.name] : value}))
}

const adddetails = () => {

    if(edit){
        const updatedetails = details.map((row)=>row.id=== store.id ? store:row);
        setDetails(updatedetails);
        setEdit(false);
        setStore(userDetails)
        setRemove(!remove)
    }else{
        let storeItems = details;
        const item = {id: details.length,...store}
        storeItems = [...details,item];
        setDetails(storeItems);
        cleardetails();
        setRemove(!remove);
    }
}

const cleardetails = () => {
    setStore(userDetails);
}

const updateRow = (row) => {
    setStore(row);
    setEdit(true);
    setRemove(!remove)
}

return (
    <>
    {remove ? null : 
    <>
    <div className="topS">
        <div className="left">
            <span className="stuDetails">Student Details</span>
        </div>
        <div className="right">
            <button className="btn" onClick={() => setRemove(!remove)}>Add New Student</button>
        </div>
    </div>
    <div className='bottomS'>
        <table className="tableBox">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Course</th>
                    <th scope="col">Batch</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
            {details && details.map((row) =>
                <tr>
                    <th scope="row">{row.name}</th>
                    <td>{row.age}</td>
                    <td>{row.course}</td>
                    <td>{row.batch}</td>
                    <td><button onClick={()=>{updateRow(row)}} className="editBtn">Edit</button></td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    </> }

    {remove ?
        <div>
            <div className='storeBox'>
                <input type='text' className='inputBox' name='name' value={store.name} label='Name' placeholder='type your name here' onChange={handleEditChanges} />
                <input type='number' className='inputBox' name='age' value={store.age} label='Age' placeholder='type your age here' onChange={handleEditChanges} />
                <input type='text' className='inputBox'name='course' value={store.course} label='course' placeholder='type your course here' onChange={handleEditChanges} />
                <input type='text' className='inputBox'name='batch' value={store.batch} label='Batch' placeholder='type your batch here' onChange={handleEditChanges} />
            </div>
            <div>
                <button onClick={adddetails} className="submitBtn">{edit ? 'Update' : 'Submit'}</button>
                <button onClick={cleardetails} className="cancelBtn">Cancel</button>
            </div>
        </div> : null}
    </>
  )
}

export default Student;