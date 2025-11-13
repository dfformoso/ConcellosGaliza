import { useNavigate } from 'react-router-dom';
import '../styles/Title.css';

export default function Title({ title }) {
  const navigate = useNavigate();

  return (
    <div className="title-container">
      <button
        onClick={() => navigate('/')}
        className="title-button"
      >
        <span className="title-button-arrow">←</span>
        <span>Volver</span>
      </button>
      <h1 className="title-h1">
        {title}
      </h1>
    </div>
  );
} 