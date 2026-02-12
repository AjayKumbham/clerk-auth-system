import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

export default function HomePage() {
    return (
        <section className="hero">
            <h1 className="hero-title">Secure Authentication for Modern Apps</h1>
            <p className="hero-desc">
                A production-ready solution designed for security, speed, and seamless user experiences. Built with top-tier technology.
            </p>

            <SignedOut>
                <div className="hero-actions">
                    <SignInButton mode="modal">
                        <button className="hero-btn-primary">Explore Now</button>
                    </SignInButton>
                </div>
                <span className="hero-badge">
                    <span className="hero-badge-dot" aria-hidden />
                    Ready to Scale
                </span>
            </SignedOut>

            <SignedIn>
                <div className="hero-actions">
                    <button className="hero-btn-secondary" onClick={() => window.location.href = '/dashboard'}>Go to Dashboard</button>
                </div>
                <span className="hero-badge">
                    <span className="hero-badge-dot" aria-hidden />
                    Welcome back
                </span>
            </SignedIn>
        </section>
    );
}
