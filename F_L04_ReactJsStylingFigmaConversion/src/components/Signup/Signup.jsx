import style from "./Signup.module.css";
import logo from "../../assets/logo.svg";

export default function Signup({ onToggle }) {
    return (
        <div className={style.signup}>
            {/* ---------- Left panel ---------- */}
            <section className={style.left}>
                <h1 className={style.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img className={style.logo} src={logo} alt="Design Spacee logo" />

                <p className={style.link}>figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className={style.right}>
                <div className={style.form}>
                    <h2>Create Account</h2>

                    <div className={style.socialButtons}>
                        <button className={style.button}>
                            Sign up with Google
                        </button>

                        <button className={style.button}>
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className={style.divider}>
                            <span> - OR- </span>  
                    </div>


                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />

                    <button className={style.signupButton}>
                        Sign up
                    </button>

                    <p className={style.signin}>
                        Already have an account?{" "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (onToggle) onToggle();
                            }}
                        >
                            Login Here
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
