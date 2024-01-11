import './SubmitButton.css';

const SubmitButton = (props: { title: string; type: 'submit' }) => {
  const { title, type } = props;
  return (
    <button type={type} className='button'>
      {title}
    </button>
  );
};

export default SubmitButton;
