import './StartButton.css';

const StartButton = ({onClick }) => {
	return (
		<button className='custom-button' onClick={onClick}>
			Descubrir
		</button>
	);
};

export default StartButton;
