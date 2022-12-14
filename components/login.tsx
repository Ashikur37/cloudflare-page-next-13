'use client';

import supabase from '../utils/supabase-browser';
import { useEffect } from 'react';
// Supabase auth needs to be triggered client-side
export default function Login() {
    useEffect(() => {
        async function readSession() {
            const session = await supabase.auth.getSession();
            console.log(session?.data?.session);
        }
        readSession();
    }, [])

    const handleEmailLogin = async () => {
        const { error, data: { session } } = await supabase.auth.signInWithPassword({
            email: 'piash3700@gmail.com',
            password: 'password'
        });

        if (error) {
            console.log({ error });

        }
        // else {
        //     fetch('/api/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ session }),
        //     });
        // }
    };

    const handleGitHubLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github'
        });

        if (error) {
            console.log({ error });
        }
    };

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.log({ error });
        }
    };

    return (
        <>
            <button onClick={handleEmailLogin}>Email Login</button>
            <button onClick={handleGitHubLogin}>GitHub Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}