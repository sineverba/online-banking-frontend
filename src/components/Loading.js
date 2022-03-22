import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
    return (
        <FontAwesomeIcon icon={faSpinner} className="fa-spin"/>
    );
}

export default Loading;