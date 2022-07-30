import { useState } from "react";

export const useForm = (form = {}) => {

    const [FormState, setFormState] = useState(form)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...FormState, [name]: value })
    }

    const onResetForm = () => {
        setFormState(form);
    }


    return {
        ...FormState,
        onResetForm,
        onInputChange
    }
}
