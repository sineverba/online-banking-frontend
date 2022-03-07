import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loading = (props) => {
    return (
        <div className="loading">
            <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-10x"/>
        </div>
    );
}

export default Loading;