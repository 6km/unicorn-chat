import { IoLogoGithub, IoLogoGoogle, IoLogoTwitter } from "react-icons/io5";
import { LoginWithGithub, LoginWithGoogle, LoginWithTwitter } from "../../firebase";
import { ButtonGithub, ButtonGoogle, ButtonTwitter } from "../Buttons";

export default function LoginScreen () {
    return (
        <>
            <h4>Continue with...</h4>
            <div className="login_to_continue">
                <div className="login_methods">
                    <ButtonTwitter onClick={LoginWithTwitter}><IoLogoTwitter /></ButtonTwitter>
                    <ButtonGoogle onClick={LoginWithGoogle}><IoLogoGoogle /></ButtonGoogle>
                    <ButtonGithub onClick={LoginWithGithub}><IoLogoGithub /></ButtonGithub>
                </div>
            </div>
        </>
    )
}
