import {send} from '@emailjs/browser';
import {FC, memo, useCallback, useMemo, useState} from 'react';
import {toast} from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [messageSent, setMessageSent] = useState(false);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const templateParams = {
        "from_name": data.name,
        "reply_to": data.email,
        "message_html": data.message
      };

      const publicKey = "user_4cNIsVKI69cQQSwT6hDz0";
      const serviceId = "Asiel-Portfolio-v2";
      const templateId = "portfolio_messages";

      send(serviceId, templateId, templateParams, {publicKey})
        .then(() => {
          toast("Your message was sent", {
            position: 'top-right',
            theme: 'dark',
            type: 'success'
          });
          setMessageSent(true);
        }, (err) => {
          console.log({err})
          toast("There was an error sending your message. Please try again later.", {
            position: 'top-right',
            theme: 'dark',
            type: 'error'
          })
        })
    },
    [data],
  );

  const clearForm = () => {
    setData({
      name: '',
      email: '',
      message: ''
    });
  }

  const handleClear = () => {
    clearForm();
    setMessageSent(false)
  }

  const inputClasses =
    'bg-slate-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-sky-700 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-input text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name}/>
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={1000}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        style={{'resize': 'none'}}
        value={data.message}
      />
      <div className="flex w-full justify-start gap-x-4">
        <button
          aria-label="Submit contact form"
          className="w-max rounded-full border-2 border-sky-700 bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-slate-700 focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-stone-800"
          type="submit">
          Send Message
        </button>
        <button
          aria-label="Clear contact form"
          className="w-max rounded-full border-2 border-white bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-slate-700 focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!messageSent}
          onClick={() => handleClear()}
          type="button">
          Clear
        </button>
      </div>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
