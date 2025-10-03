interface ButtonProps {
  text: string,
  handleClick?: () => void;
}

export default function Button({text, handleClick}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="mt-4 self-start px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-200"
    >
      {text}
    </button>
  )
}
