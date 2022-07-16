import { Button, Card, Label, TextInput } from 'flowbite-react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUserEmail } from '../reducers/authReducer';
import authService from '../services/auth.service';

interface IFormInputs {
    email: string
    password: string
}

const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        try {
            await authService.login(data);
            const loggedInUser = await authService.getLoggedInUserInfo();
            debugger;
            dispatch(setLoggedInUserEmail(loggedInUser.result.email));
            navigate("/dashboard", { replace: true });

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container mx-auto px-4 py-4 justify-center flex h-screen items-center">
            <div className='w-fill md:w-1/2'>
                <p className=' text-center font-bold py-5 text-2xl'>Login to your account</p>
                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="email@email.com"
                                {...register("email", { required: true })}
                            />
                            <span className=' text-red-600'>{errors.email && "email is required"}</span>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                {...register("password", { required: true })}
                            />
                            <span className=' text-red-600'>{errors.password && "Passpord is required"}</span>
                        </div>
                        <div className='mt-5 justify-center flex'>
                            <Button type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>

    )
}
export default LoginComponent;