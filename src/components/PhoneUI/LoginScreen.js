import { IoLogoGoogle, IoLogoTwitter } from "react-icons/io5";
import { LoginWithGoogle, LoginWithTwitter } from "../../utilities/firebase";
import { ButtonGoogle, ButtonTwitter } from "../Buttons";

export default function () {
    return (
        <>
            <h4>Continue with...</h4>
            <div className="login_to_continue">
                <div className="login_methods">
                    <ButtonTwitter onClick={() => LoginWithTwitter()}><IoLogoTwitter /></ButtonTwitter>
                    <ButtonGoogle onClick={() => LoginWithGoogle()}><IoLogoGoogle /></ButtonGoogle>
                </div>
            </div>
        </>
    )
}