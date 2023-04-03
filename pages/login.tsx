import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get("code");
        if (code) {
            axios
                .get(`http://localhost:4000/api/auth/google/callback?code=${code}`)
                .then((response) => {
                    console.log(response);
                    localStorage.setItem("access_token", response.data.access_token);
                    // router.push("/");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [router]);

    const handleLogin = () => {
        window.location.href = "http://localhost:4000/api/auth/google";
    };

    return (
        <div>
            <button onClick={handleLogin}>Log in with Google</button>
        </div>
    );
}
