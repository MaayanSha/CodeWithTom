import {BiErrorAlt} from "react-icons/bi";

// FallbackErrorPage component, which will be displayed when an error occurs with the error
export const FallbackErrorPage = ({error, resetErrorBoundary}) => {
    return (
        <p>
            <h2><BiErrorAlt />
                Something went wrong..</h2>
            <h4>Refresh the page and try again</h4>
            <pre>{error.message}</pre>
        </p>
    )
}