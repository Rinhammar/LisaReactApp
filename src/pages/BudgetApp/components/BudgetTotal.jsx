import { useContext, useState } from "react"
import { StyledCurrencyBox } from "../../../styling/Styled";
import { AppContext } from "../context/AppContext"
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

export default function BudgetTotal(){
    const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	// Handles editing the budget. When the button EditBudget is pressed, setIsEditing becomes true, therefore you can edit the budget.
	const handleEditClick = () => {
		setIsEditing(true);
	};
	// Handles saving the new budget that has been inputed. Sets setIsEditing to false so after you press the save button you cannot edit anymore.
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
