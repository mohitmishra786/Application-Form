import React from 'react'
import "./entry.style.css";
import { LoginForm } from "../../components/login/login.component";
export const Entry = () => {
    return (
        <div className="entry-page bg-info">
            <LoginForm />
        </div>
    )
}
