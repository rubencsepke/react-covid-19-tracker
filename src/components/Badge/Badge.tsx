import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface BadgeProps {
    icon: IconProp
    percentage: string
}

const Badge = ({icon, percentage}: BadgeProps) => {
  return (
    <div><FontAwesomeIcon icon={icon} /> <span className="badge-text">{percentage}%</span></div>
  )
}

export default Badge;
