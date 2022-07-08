import { useState } from "react";

type FormInitialValues = {
  [key: string]: string;
};

const useForm = (initialValues: FormInitialValues) => {
  const [values, setValues] = useState(initialValues);

  const valueChangeHandler: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetValues = () => {
    setValues(initialValues);
  };

  return { values, valueChangeHandler, resetValues };
};

export default useForm;
