import React, { useState } from "react";

function LoginModal({ closeModal }) {
  const [activeTab, setActiveTab] = useState("password");
  const [phone, setPhone] = useState("");

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={closeModal}>
          ✕
        </button>

        {/* Tabs */}
        <div style={styles.tabs}>
          <span
            onClick={() => setActiveTab("password")}
            style={activeTab === "password" ? styles.activeTab : styles.tab}
          >
            Password
          </span>
          <span
            onClick={() => setActiveTab("phone")}
            style={activeTab === "phone" ? styles.activeTab : styles.tab}
          >
            Phone Number
          </span>
        </div>

        {/* Password Login */}
        {activeTab === "password" && (
          <>
            <input
              type="text"
              placeholder="Please enter your Phone or Email"
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Please enter your password"
              style={styles.input}
            />

            <div style={styles.forgot}>Forgot password?</div>

            <button style={styles.loginBtn}>LOGIN</button>
          </>
        )}

        {/* Phone Number Login */}
        {activeTab === "phone" && (
          <>
            <div style={styles.phoneRow}>
              <div style={styles.countryCode}>PK +92</div>
              <input
                type="tel"
                placeholder="Please enter your phone number"
                style={styles.phoneInput}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button style={styles.whatsappBtn}>
              🟢 Send code via Whatsapp
            </button>
          </>
        )}

        <p style={styles.signup}>
          Don't have an account?{" "}
          <span
            style={styles.link}
            onClick={() => {
              closeModal();
              openSignup();
            }}
          >
            Sign up
          </span>
        </p>

        <p style={{ textAlign: "center", margin: "15px 0" }}>Or, login with</p>

        <div style={styles.social}>
          <button style={styles.google}>Google</button>
          <button style={styles.facebook}>Facebook</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    width: "380px",
    padding: "25px",
    borderRadius: "4px",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  tabs: {
    display: "flex",
    gap: "25px",
    marginBottom: "20px",
    fontWeight: "600",
  },
  tab: {
    cursor: "pointer",
    color: "#999",
  },
  activeTab: {
    cursor: "pointer",
    borderBottom: "2px solid #f57224",
    paddingBottom: "4px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
  },
  phoneRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "15px",
  },
  countryCode: {
    border: "1px solid #ccc",
    padding: "10px",
    background: "#f5f5f5",
    fontSize: "14px",
  },
  phoneInput: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
  },
  forgot: {
    textAlign: "right",
    fontSize: "12px",
    color: "#1a9cb7",
    cursor: "pointer",
  },
  loginBtn: {
    width: "100%",
    padding: "10px",
    background: "#f57224",
    color: "#fff",
    border: "none",
    marginTop: "10px",
    cursor: "pointer",
  },
  whatsappBtn: {
    width: "100%",
    padding: "10px",
    background: "#f57224",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  },
  signup: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#1a9cb7",
    cursor: "pointer",
  },
  social: {
    display: "flex",
    gap: "10px",
  },
  google: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
  },
  facebook: {
    flex: 1,
    padding: "8px",
    border: "none",
    background: "#1877f2",
    color: "#fff",
    cursor: "pointer",
  },
};

export default LoginModal;
