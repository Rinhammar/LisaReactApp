import questions from './questions.js';
import { useState } from "react";
import { QuizCard, QuestionSection, AnswerSection, StyledButton, ScoreSection } from '../../Styled';

export default function QuizCardComp({cardWidth, cardMinHeight, buttonBackgroundColour, answerButtonWidth, endButtonWidth}){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    console.log(cardWidth);

	// Function to handle the total score. If the value for "isCorrect" (questions.js) is true, it will add a point to the score. 
    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect === true) {
            setScore(score + 1);
        }

	// Sets variable for the next question. If nextQuestion is less than the length of the questions, the next question will appear. If not, then it will show the score
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }
	// Button to handle resetting the quiz (play again)
    const handleResetButton = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	}
    return (
        <QuizCard cardWidth={cardWidth} cardMinHeight={cardMinHeight}>
            {/* If showScore is true, it will show the score screen. If not, it will carry on with the quiz. */}
            {showScore ? (
                <ScoreSection>
                    <div className='score-text'> You scored {score} out of {questions.length}</div>
                    <StyledButton backgroundColour={buttonBackgroundColour} buttonWidth={endButtonWidth} onClick={() => handleResetButton(score)}>Play Again!</StyledButton>
                </ScoreSection>
            ) : (
                <>
                    <QuestionSection>
                        <div className='question-count'>
                            Question <span>{currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </QuestionSection>
                    <AnswerSection>
                        {questions[currentQuestion].answerOptions.map((answerOption) => 
                            <StyledButton backgroundColour={buttonBackgroundColour} buttonWidth={answerButtonWidth} onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</StyledButton>)}
                    </AnswerSection>
                </>
                )}
        </QuizCard>
    );
}