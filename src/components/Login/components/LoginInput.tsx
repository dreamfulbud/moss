import { UseFormRegisterReturn } from 'react-hook-form';
import { Error } from '../../../styles/components';

export default function Input({
  name,
  method,
  register,
  register2,
  required,
  errorMsg,
  errorMsg2,
  label,
  ...rest
}: InputProps) {
  return (
    <>
      <label htmlFor={`user-${name}`} className="a11y-hidden">
        {label}
      </label>
      <input id={`user-${name}`} {...register} required={required} {...rest} />
      {method === 'userId' ? (
        <>
          <label htmlFor="user-pw" className="a11y-hidden">
            비밀번호
          </label>
          <input
            {...register2}
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            id="user-pw"
          />
        </>
      ) : null}

      {errorMsg ? (
        <Error>{errorMsg}</Error>
      ) : errorMsg2 ? (
        <Error>{errorMsg2}</Error>
      ) : null}
    </>
  );
}

//TS
interface InputProps {
  name: string;
  register: UseFormRegisterReturn;
  register2?: UseFormRegisterReturn;
  required?: boolean;
  [key: string]: any;
}
