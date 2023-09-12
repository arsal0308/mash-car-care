import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";

export default function AuthPage({ setUser, user }) {
    return (
        <main>
                <SignUpForm setUser={setUser} />
                <h3>or</h3>
                <LogInForm setUser={setUser} />
        </main>
    );
}