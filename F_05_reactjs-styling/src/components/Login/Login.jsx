// import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import style from "./Login.module.css";

function Login () {
    const [active, setActive] = useState('Login');

  return (
    <div className={style.login}>
    {/* LEFT SIDE */}

    <div className={style.left}>
        <img src="src/assets/side_image.jpg" alt="hero" />
    </div>

    {/* RIGHT SIDE */}
    <div className={style.right}>
        <h1>Hello, <span className={style.highlight}>Guyss!</span></h1>

        <section className={style.navigation}>
            <a href="#Login" onClick={() => setActive('Login')} className={active === 'Login' ? style.active : ''}>Login</a>
            <a href="#Signup" onClick={() => setActive('Signup')} className={active === 'Signup' ? style.active : ''}>Signup</a>
        </section>

        <section className={style.loginForm}>

            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />

        </section>

        <button className={style.loginButton}>Login</button>

        <h3 className={style.loginDivider}>Or</h3>

        <div className={style.socialLogin}>
            <div className={style.google}>
                <a href="#google" aria-label="Sign in with Google">
                    <svg width="36" height="36" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.79l7.97-6.2z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                </a>
            </div>

            <div className={style.facebook}>
                <a href="#facebook" aria-label="Sign in with Facebook">
                    <svg width="36" height="36" viewBox="0 0 48 48">
                        <path fill="#1877F2" d="M24 0C10.745 0 0 10.745 0 24c0 11.98 8.777 21.905 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.015 3.582-9.338 9.066-9.338 2.626 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.223 45.905 48 35.98 48 24 48 10.745 37.255 0 24 0z"/>
                        <path fill="#FFFFFF" d="M33.342 30.938L34.406 24h-6.656v-4.969c0-1.9 0.93-3.75 3.911-3.75h3.026v-5.906s-2.746-.469-5.372-.469c-5.484 0-9.066 3.323-9.066 9.338V24h-6.094v6.938h6.094v16.77c1.238.195 2.507.292 3.75.292s2.512-.097 3.75-.292v-16.77h5.587z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Login
