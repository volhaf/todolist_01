
type ButtonProps = {
    onClick: () => void;
    title: string;
    disabled?: boolean;
    className?: string;

}

export function Button({onClick,title, disabled, className}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={className}
        > {title}
        </button>
    )
}