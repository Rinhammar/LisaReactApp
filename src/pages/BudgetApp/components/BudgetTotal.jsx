import { useContext, useState } from "react"
import { StyledCurrencyBox } from "../../../styling/Styled";
import { AppContext } from "../context/AppContext"
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

export default function BudgetTotal(){
    const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'EDIT_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<StyledCurrencyBox>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</StyledCurrencyBox>
	);
};
