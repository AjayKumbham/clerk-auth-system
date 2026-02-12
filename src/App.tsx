import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <span className="nav-brand">App</span>
        <div className="nav-actions">
          <SignedOut>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
      <main className="main">
        <section className="hero">
          <SignedIn>
            <h1 className="hero-title">Welcome back</h1>
            <p className="hero-desc">
              You're signed in. Use the menu above to manage your account.
            </p>
            <span className="hero-badge">
              <span className="hero-badge-dot" aria-hidden />
              Signed in
            </span>
          </SignedIn>
          <SignedOut>
            <h1 className="hero-title">Get started</h1>
            <p className="hero-desc">
              Sign in or create an account to continue.
            </p>
            <span className="hero-badge">
              <span className="hero-badge-dot" aria-hidden />
              Ready when you are
            </span>
          </SignedOut>
        </section>
      </main>
    </div>
  )
}

export default App
