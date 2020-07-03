import { useEffect } from 'react';
import axios from 'axios';

import RenderList from './RenderList';
import Header from './Header';

const DirectoryList = () => {
    const [initialStore, setInitialStore] = useState({
        data: []
    });
    console.log('initialStore', initialStore.data);
    
    useEffect(
        () => {     
            axios.get('https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory')
              .then((response) => {
                const responseData = response.data.data;
                
                const arrayResponseData = [responseData[0], responseData[1], responseData[2], responseData[3], responseData[4], responseData[5], responseData[6], responseData[7], responseData[8], responseData[9], responseData[10], responseData[11], responseData[12], responseData[13], responseData[14], responseData[15], responseData[16], responseData[17], responseData[18], responseData[19], responseData[20], responseData[21], responseData[22]];
                setInitialStore({
                    ...initialStore,
                    data: arrayResponseData,
                })
              })
              .catch((error) => {
                console.log(error);
              }) 
        }, []);

    return(
        <div className='principal-container'>
            <Header/>
            <div className="container">
                {
                    initialStore.data.map(item => {                
                        return (
                            <RenderList 
                                key={item.id}
                                item={item}
                                name={item.name}
                            />
                    )})
                }
            </div>
        </div>
    )
}

export default DirectoryList;