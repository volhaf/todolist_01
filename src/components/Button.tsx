
type ButtonProps = {
    onClick: () => void;
    title: string;
    disabled?: boolean;

}

export function Button({onClick,title, disabled}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
        > {title}
        </button>
    )
}