"use client";

export interface ChatInputProps {
  /** The current value of the input */
  input?: string;
  /** An input/textarea-ready onChange handler to control the value of the input */
  handleInputChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  /** Form submission handler to automatically reset input and append a user message  */
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export default function ChatInput(props: ChatInputProps) {
  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className="flex items-start justify-between w-full max-w-5xl p-4 rounded-xl shadow-xl gap-4" 
        style={{ backgroundColor: '#000000' }}
      >
        <input
          autoFocus
          name="message"
          placeholder="Type a message"
          className="w-full p-4 rounded-xl text-white shadow-inner flex-1"
          style={{ backgroundColor: '#393939' }}
          value={props.input}
          onChange={props.handleInputChange}
        />
        <button
          disabled={props.isLoading}
          type="submit"
          className="p-4 text-white font-bold rounded-xl shadow-xl bg-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send message
        </button>
      </form>
    </>
  );
}
