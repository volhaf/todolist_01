
type ButtonProps = {
    onClick: () => void;
    title: string;
    disabled?: boolean;
    buttonColor?: string;

}

export function Button({onClick,title, disabled, buttonColor}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={buttonColor}
        > {title}
        </button>
    )
}