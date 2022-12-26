import Students from './Students';

const Reducer = (state="",action) =>{
    switch(action){
        case Students : return <Students />
        default : return <Students />
    }
}

export default Reducer;