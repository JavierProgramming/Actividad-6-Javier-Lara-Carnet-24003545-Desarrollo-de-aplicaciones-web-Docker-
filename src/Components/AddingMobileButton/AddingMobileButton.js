import Button from 'react-bootstrap/Button';
import './AddingMobileButton.scss';
import { useDispatch } from 'react-redux';
import { addGoal } from '../redux/goalsSlice'; // Asegúrate que este path sea correcto

function AddingMobileButton() {
  const dispatch = useDispatch();

  const handleAddGoal = () => {
    const newGoal = {
      title: 'Nueva Meta',
      deadline: new Date().toISOString().split('T')[0] // ejemplo de fecha
    };

    dispatch(addGoal(newGoal)); // Acción Redux que hará el POST
  };

  return (
    <>
      <Button variant="info" className='btn-addgoal' onClick={handleAddGoal}>
        Add Goal
      </Button>
    </>
  );
}

export default AddingMobileButton;
