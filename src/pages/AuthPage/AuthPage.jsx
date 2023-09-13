import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import './AuthPage.css';
 
export default function AuthPage({ setUser, user }) {
    return (
        <main>
            <h1>Welcome to Mash Car Care</h1>
            <SignUpForm setUser={setUser} />
            <h3>or</h3>
            <LogInForm setUser={setUser} />
        </main>
    );
}