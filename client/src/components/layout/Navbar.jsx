function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="navbar-right">
        <span>🔔</span>

        <span>Welcome, Akshay</span>

        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </header>
  );
}

export default Navbar;