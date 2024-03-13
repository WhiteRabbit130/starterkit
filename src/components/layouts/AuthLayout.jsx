import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";

import { userState } from "@store";

function AuthLayout(props) {
    const [user] = useRecoilState(userState);

    if(!user.isLoggedIn) {
      return (<Navigate to="/" />)
    }

    return (
        <div className="auth-layout">
            {!user.isLoggedIn
                ? <p>You are not logged in yet. You have to log first to see these pages.</p>
                : <>{props.children}</>}            
        </div>
    )
}

export default AuthLayout;
