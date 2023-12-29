import { TextField, styled } from "@mui/material"

const Input = (props) => {
    return <StyledTextField fullWidth {...props}/>
}

const StyledTextField = styled(TextField) ({
    ".MuiInputBase-root": {
        borderRadius: 12
    },
    "input": {
        padding: 24,
        boxSizing: "border-box",
    }
})

export default Input;