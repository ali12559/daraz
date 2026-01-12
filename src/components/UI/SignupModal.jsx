import React, { useState } from "react";

function SignupModal({ closeModal, openLogin }) {
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={closeModal}>✕</button>

        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Sign up
        </h3>

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

        <label style={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span>
            By creating and/or using your account, you agree to our{" "}
            <span style={styles.link}>Terms of Use</span> and{" "}
            <span style={styles.link}>Privacy Policy</span>.
          </span>
        </label>

        <button
          style={{
            ...styles.whatsappBtn,
            opacity: agree ? 1 : 0.6,
          }}
          disabled={!agree}
        >
         Send code via Whatsapp
        </button>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <span
            style={styles.link}
            onClick={() => {
              closeModal();
              openLogin();
            }}
          >
            Log in Now
          </span>
        </p>

        <p style={{ textAlign: "center", margin: "15px 0" }}>
          Or, sign up with
        </p>

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
  checkboxRow: {
    display: "flex",
    gap: "8px",
    fontSize: "12px",
    marginBottom: "15px",
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
  loginText: {
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

export default SignupModal;
