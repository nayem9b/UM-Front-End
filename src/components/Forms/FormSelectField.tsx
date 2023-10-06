"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  name: string;
  options: SelectOptions[];
  size?: "large" | "small";
  value?: string | string[] | undefined;
  defaultvalue?: SelectOptions;
  label?: string;
  placeholder?: string;
};

const FormSelectField = ({
  name,
  size = "large",
  value,
  label,
  options,
  defaultvalue,
  placeholder,
}: SelectFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            placeholder={placeholder}
            style={{ width: "100%" }}
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormSelectField;
