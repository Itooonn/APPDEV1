import "./Login.css";
import logo from "../../assets/logo.svg";

export default function Login() {
    return (
        <div className={style.login}>
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
                    <h2>Sign-in</h2>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button>Login</button>

                    <p className={style.signup}>
                        Don't have an account? <a href="#">Signup Here</a>
                    </p>
                </div>
            </section>
        </div>
    );
}