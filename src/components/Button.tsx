interface ButtonProps {
  text: string,
}

export default function Button({text}: ButtonProps) {
  return (
    <button className="mt-4 self-start px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
      {text}
    </button>
  )
}
