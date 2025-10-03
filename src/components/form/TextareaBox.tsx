interface TextareaBoxProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className: string
}

export default function TextareaBox({ placeholder, value, onChange, className }: TextareaBoxProps) {
  return (
    <div>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />

        <hr className="mt-2 border-gray-300" />
    </div>
  )
}
