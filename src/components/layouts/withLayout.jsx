import AuthLayout from "./AuthLayout";
import NonAuthLayout from "./NonAuthLayout";

function withAuthLayout(elements, isLoggedIn) {
    return (
        <AuthLayout isSignedIn={isLoggedIn}>
            {elements}
        </AuthLayout>
    )
}

function withNonAuthLayout(elements) {
    return (
        <NonAuthLayout >
            {elements}
        </NonAuthLayout>
    )
}

export default withAuthLayout;
export { withNonAuthLayout }