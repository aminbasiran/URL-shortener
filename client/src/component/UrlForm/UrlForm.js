import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react" 
import axios from "axios"

function UrlForm() {

    const [minified, setMinified] = useState(null)

    const schema = yup.object().shape({
        url : yup.string("input is not a string").url("please enter valid URL").required("please enter url"),
        additional:yup.string("input is not a string").optional()
    })
        
    const {register, handleSubmit,reset, formState:{errors}} = useForm(
        {
            resolver:yupResolver(schema)
        }
    )


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/', data);
            console.log(response)
            reset();
        } catch (error) {
            console.error('Error:', error);
        }

        console.log(data)
    }

    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" id="url" name="url" placeholder="enter URL" {...register("url")} />
                <p>{errors.url?.message}</p>
                <input type="text" id="additional" name="additional" placeholder="localhost:3000/" {...register("additional")} />
                <p>{errors.additional?.message}</p>
                <button>mini-size</button>
            </form>
        </>
    );
}

export default UrlForm;