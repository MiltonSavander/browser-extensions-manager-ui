import { Switch } from "@mui/material";
import Button from "@mui/material/Button";
import "../global.css";

interface CardProps {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  onSwitchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

function Card({ logo, name, description, isActive, onSwitchChange, onClick }: CardProps) {
  return (
    <div className="cardContainer">
      <div className="cardUpperContainer">
        <img src={logo} alt={name} />
        <div className="cardInnerContaier">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="cardLowerContainer">
        <Button className="roundedButton" variant="outlined" size="small" onClick={onClick}>
          Remove
        </Button>
        <Switch checked={isActive} onChange={onSwitchChange} />
      </div>
    </div>
  );
}

export default Card;
