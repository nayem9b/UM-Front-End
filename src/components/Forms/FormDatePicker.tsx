import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type UMDatePickerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  size?: "large" | "small";
  value?: Dayjs;
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  value,
  size,
}: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    console.log(date, dateString);
    setValue(name, dateString);
  };
  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            onChange={handleOnChange}
            defaultValue={dayjs(field.value) || ""}
            size={size}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
