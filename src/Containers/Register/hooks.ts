import type { FormInputs as RegisterInput } from './interfaces'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

export const useComponentLogic = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterInput>()

    const onSubmit: SubmitHandler<RegisterInput> = (data) => {
        console.log('data::', data)
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    }
}