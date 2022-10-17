import styled from 'styled-components';

export const PageContainer = styled.div`
    font-family: ${(props) => props.fontFamily};
    position: absolute;
    top: 145px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: ${(props) => props.theme.containerColour};
`

export const PageHeader = styled.h1`
    margin: 0;
    padding: 15px;
    font-size: 40px;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    -webkit-text-fill-color: ${(props) => props.theme.pageHeaderColour};
    -webkit-text-stroke-width: ${(props) => props.theme.pageHeaderStrokeWidth};
    -webkit-text-stroke-color: ${(props) => props.theme.pageHeaderStrokeColour};
`
export const QuizContainer = styled.div`
    color: white;
    justify-content: center;
    display: flex;
    align-items: center;
`

export const QuizCard = styled.div`
    background-color: ${(props) => props.theme.cardBackgroundColour};
    width: ${(props) => props.cardWidth};
    min-height: ${(props) => props.cardMinHeight};
    border-radius: 15px;
    padding: 30px;
    box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: space-evenly;
`

export const QuestionSection = styled.div`
    color: white;
    width: 50%;
    padding: 0 20px 0 10px;
    
    .question-count {
        font-size: 26px;

        span{
            font-weight: bolder;
        }
    }

    .question-text {
        font-size: 20px;
        margin-top: 10px;
    }
`
export const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColour};
    width: ${(props) => props.buttonWidth};
    margin: 5px;
    color: ${(props) => props.theme.buttonTextColour};
    font-weight: bold;
    font-size: 16px;
    border-radius: 15px;
    padding: 10px;
    border: 3.5px solid ${(props) => props.theme.buttonBorderColour};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.buttonHoverBackgroundColour};
        color: ${(props) => props.theme.buttonHoverColour};
    }

    &:active {
        background-color: ${(props) => props.theme.buttonActiveBackgroundColour};
        color: ${(props) => props.theme.buttonActiveColour};
    }
`

export const AnswerSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ScoreSection = styled.div`
    font-size: 26px;
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    .score-text {
        margin-bottom: 25px;
        text-align: center;
    }
`
export const StyledSwitch = styled.div`
  display: flex;
  width: 100vw;
  height: 100px;
  justify-content: center;
  align-items: center;

  h1 {
      font: 16px;
  }
`
export const BudgetContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const StyledExpenseList = styled.ul`
    margin: 0;
    padding-inline-start: 0;
    white-space: nowrap;
    overflow: hidden;
    border: 0.01em solid #ebdbf0;
    width: 600px;
`

export const StyledExpenseItemList = styled.li`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    align-items: center;
    padding: 5px 5px 5px 10px;
    border: 0.01em solid #ebdbf0;
`

export const StyledCostDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const StyledCostSpan = styled.span`
    border: 2px solid #cea6d9;
    border-radius: 10px;
    background-color: #cea6d9;
    padding: 5px;
    margin: 5px;
`

export const StyledDeleteIcon = styled.span`
:hover{
    cursor: pointer;
}
`

export const StyledCurrencyBox = styled.div`
    border: 3px solid #cea6d9;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    display: flex;
`

export const StyledBudgetContainer = styled.div`
    width: 600px;
    justify-content: space-between;
    display: flex;
`

export const StyledFormDiv = styled.div`
    justify-content: space-between;
    display: flex;
    width: 600px;
    align-items: center;
`

export const StyledEditButton = styled(StyledButton)`
    padding: 5px;
    border-radius: 5px;
    margin-left: 5px;
`

export default PageHeader;