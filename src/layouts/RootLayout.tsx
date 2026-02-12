import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { Link, Outlet } from 'react-router-dom';
import '../App.css';

export default function RootLayout() {
    return (
        <div className="app">
            <nav className="nav">
                <Link to="/" className="nav-brand">Auth System</Link>
                <div className="nav-actions">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="btn-signin">Sign In</button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <button className="btn-signup">Get Started</button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>
            </nav>
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
}
