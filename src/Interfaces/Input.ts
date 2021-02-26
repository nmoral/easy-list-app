
type InputVariant = 'outlined'

export interface InputInterface {
    id: string
    label: string
    required?: boolean
    helperText?: string
    variant?: InputVariant
}