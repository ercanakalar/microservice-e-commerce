import './FormInput.css';

const FormInput = (props: any) => {
  const { labelName, inputId, type, placeHolder, onChangeInput, icon } =
    props;

  return (
    <div>
      <label htmlFor={inputId}> {labelName}</label>
      <div className='flex relative w-full group'>
        <div className='flex justify-start items-center group-focus-within:text-indigo-600 transition-colors'>
          {/* <img src={src} alt={inputId} /> */}
          <img src={icon} className='absolute p-2' alt={inputId} />
        </div>
        <input
          className='input p-3 pl-9 w-full'
          type={type}
          id={inputId}
          name={inputId}
          placeholder={placeHolder}
          onChange={onChangeInput}
        />
        <div className='focus-input'></div>
      </div>
    </div>
  );
};

export default FormInput;
