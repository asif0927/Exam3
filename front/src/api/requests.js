import { BASE_URL } from "./baseurl";
import axios  from "axios";

//get
export const getAllImmigrants = async(title)=>{
    let Immigrants;
    let URL;
    if (!title) {
        URL = BASE_URL+'/immigrants';
    }
    else{
        URL = BASE_URL+`/immigrants/?title=${title}`
    }
    await axios.get(URL)
    .then(res =>{ 
       Immigrants = res.data;
    })

    return Immigrants
}
//getbyid


//post


//delete