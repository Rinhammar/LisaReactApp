import PageHeader from "../../Styled.jsx";
import { QuizContainer} from '../../Styled';
import QuizCardComp from './QuizCardComp.jsx';
import questions from './questions.js';

const cardWidth = '500px';
const cardMinHeight = '300px'
const buttonBackgroundColour = 'white';
const answerButtonWidth = '210px';
const endButtonWidth = '245px';

export default function Quiz() {
    return (
	<>
		<PageHeader>Quiz App</PageHeader>
    		<QuizContainer>
				<QuizCardComp
					questions={questions}
					cardWidth={cardWidth}
					cardMinHeight={cardMinHeight}
					backgroundColour={buttonBackgroundColour}
					answerButtonWidth={answerButtonWidth}
					endButtonWidth={endButtonWidth} 
				/>
    		</QuizContainer>
	</>
	);
}