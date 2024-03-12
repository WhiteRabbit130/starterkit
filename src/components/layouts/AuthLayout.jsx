import { Navigate } from "react-router-dom";

function AuthLayout(props) {
    if(!props.isSignedIn) {
      return (<Navigate to="/" />)
    }

    return (
        <div className="auth-layout">
            {!props.isSignedIn
                ? <p>You are not logged in yet. You have to log first to see these pages.</p>
                : <>{props.children}</>}            
        </div>
    )
}

export default AuthLayout;
