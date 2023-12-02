import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

function AuthForm() {

    const schema = yup.object().shape({
        username : yup.string("input is not a string").required("username is required"),
        email:yup.string().email().required("email is required"),
        password: yup.number().min(4).required("password is required"),
        confirmedPassword: yup.number().oneOf([yup.ref("password")],"password is not the same").required("confirmation password is required")
        })
        
    const {register, handleSubmit, reset, formState:{errors}} = useForm(
        {
            resolver:yupResolver(schema)
        }
    )

    const onSubmit = (data) => {
        reset()
        console.log(data)
    }

    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="enter URL" {...register("username")} />
                <input type="email" placeholder="example abc@mail.com" {...register("email")} />
                <input type="password" placeholder="enter password" {...register("password")} />
                <input type="password" placeholder="confirm password" {...register("confirmedPassword")} />
                <button>sign in</button>
            </form>
        </>
    );
}

export default AuthForm;