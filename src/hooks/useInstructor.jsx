import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useInstructor = () => {
    const {data,isLoading}=useQuery({
        queryFn: async ()=>{
            const {data}= await axios.get('http://localhost:5000/instructors')
            return JSON.stringify(data);
        },
    })
    return {data,isLoading}
};

export default useInstructor;