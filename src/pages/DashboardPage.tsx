import { useUser } from "@clerk/clerk-react";

export default function DashboardPage() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1 className="hero-title">Welcome, {user.firstName || 'User'}!</h1>
                <p className="hero-desc">This is a protected dashboard. You can only see this if you are authenticated.</p>
            </header>

            <div className="dashboard-grid">
                <div className="stat-card">
                    <h3>Last Login</h3>
                    <p>{user.lastSignInAt ? new Date(user.lastSignInAt).toLocaleDateString() : 'First time!'}</p>
                </div>
                <div className="stat-card">
                    <h3>Email Address</h3>
                    <p>{user.primaryEmailAddress?.emailAddress}</p>
                </div>
                <div className="stat-card">
                    <h3>Security Status</h3>
                    <p className="status-badge">Secure</p>
                </div>
            </div>
        </div>
    );
}
