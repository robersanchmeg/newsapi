import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import useNews from "../hooks/useNews"

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
]

const Form = () => {

    const { category, handleChangeCategory } = useNews()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                    label="Category"
                    onChange={handleChangeCategory}
                    value={category}
                >
                    {CATEGORIAS.map(categoria => (
                        <MenuItem 
                            key={categoria.value}
                            value={categoria.value}
                        >
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    )
}

export default Form