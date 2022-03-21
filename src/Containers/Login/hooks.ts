import type { FormInputs as LoginInput } from './interfaces'
import type { SubmitHandler, UseFormProps, UseFormStateReturn } from 'react-hook-form'
import { useForm } from 'react-hook-form'

export const useComponentLogic = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>()

    const onSubmit: SubmitHandler<LoginInput> = (data) => {
        console.log('data::', data)
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    }
}