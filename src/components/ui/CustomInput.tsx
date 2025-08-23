import { StyleSheet, TextInput, TextInputProps, Text } from "react-native";
import { Controller } from "react-hook-form";

type CustomInputProps = {
    control: any;
    name: string;
    isRequired?: any;
} & TextInputProps;

export default function CustomInput({control, name, isRequired, ...props}: CustomInputProps) {
    return (
        <Controller
            control={control}
            name={name}
            rules={{required: isRequired}}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error }
            }) => (
                <>
                    <TextInput
                        {...props}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={error ? error.message : props.placeholder}
                        placeholderTextColor={error ? 'rgba(220, 20, 60, 0.5)' : undefined}
                        style={[
                            styles.input,
                            props.style,
                            error && styles.inputError
                        ]}
                    />
                </>
            )}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    inputError: {
        borderColor: 'crimson',
    },
});
