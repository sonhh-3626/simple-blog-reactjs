interface InputBoxProps {
  type?: "text" | string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string
}

export default function InputBox({ type, placeholder, value, onChange, className }: InputBoxProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
      <hr className="mt-0 border-gray-300" />
    </div>
  );
}
