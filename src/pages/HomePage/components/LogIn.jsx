// // import { useState, useEffect } from 'react';
// // import styles from '../components/LogIn.module.css';
// // import LogInImg from '../../../assets/login-singup/login-logo.png';
// // import GoogleSheets from './GoogleSheets';

// // export default function LogIn() {
// //   const [emailLogin, setEmailLogin] = useState("");
// //   const [passwordLogin, setPasswordLogin] = useState("");
// //   const [churchid, setChurchid] = useState("");
// //   const [messageToRender, setMessageToRender] = useState("");
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const spreadsheetId = process.env.REACT_APP_SPREADSHEET_ID || "";
// //   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY || "";
// //   const range = 'Members!A:Z';

// //   // const navigate = useNavigate();

// //   useEffect(() => {
// //     const checkServer = async () => {
// //       try {
// //         const response = await fetch('/api/health');
// //         if (!response.ok) {
// //           console.error('Server health check failed:', response.status);
// //         }
// //       } catch (error) {
// //         console.error('Error checking server:', error);
// //       }
// //     };
// //     checkServer();
// //   }, []);

// //   const handleLoginMember = async (e) => {
// //     e.preventDefault();
// //     if (!emailLogin || !passwordLogin || !churchid) {
// //       setMessageToRender("Please fill in all fields.");
// //       return;
// //     }
// //     const backendURL = process.env.REACT_APP_BACKEND_URL;
// //     console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
// //     console.log("Spreadsheet ID:", process.env.REACT_APP_SPREADSHEET_ID);
// // console.log("API Key:", process.env.REACT_APP_GOOGLE_API_KEY);

// //     try {
// //       // const response = await fetch("https://mcgi-back-751732416354.us-central1.run.app/api/login", {
// //       const response = await fetch(`${backendURL}/api/login`, {

// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email: emailLogin, password: passwordLogin, churchid: churchid }),
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         console.error("Login failed:", errorData.message);
// //         setMessageToRender(<span style={{ color: "red" }}>{errorData.message}</span>);
// //       } else {
// //         const userData = await response.json();
// //         setUser(userData.user);
// //         setIsLoggedIn(true);
// //         setMessageToRender(<span style={{ color: "green" }}>Login Successful</span>);
// //       }
// //     } catch (error) {
// //       console.error("Error during login:", error);
// //       setMessageToRender(<span style={{ color: "red" }}>An error occurred. Please try again later.</span>);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     switch (e.target.name) {
// //       case "emailMember": setEmailLogin(e.target.value); break;
// //       case "passwordMember": setPasswordLogin(e.target.value); break;
// //       case "churchId": setChurchid(e.target.value); break;
// //       default: break;
// //     }
// //   };

// //   return (
// //     <div>
// //       {isLoggedIn && user ? (
// //         <GoogleSheets user={user} spreadsheetId={spreadsheetId} apiKey={apiKey} range={range} />
// //       ) : (
// //         <div className={styles.LogInConatainerDivMRA} id="form">
// //           <form className={styles.LogInConatainerFormMRA} onSubmit={handleLoginMember}>
// //             <div className={styles.LogInDivMRA}>
// //               <img src={LogInImg} alt="LogInImg" style={{ height: 160, width: 250 }} />
// //               <h1 className={styles.h1LoginMRA}>Log In</h1>
// //               <div className={styles.inputContainerLogIn}>
// //                 <input type="churchId" name="churchId" id="churchId" placeholder="Enter your Church ID" className={styles.inputchurchloginMRA} onChange={handleChange} />
// //                 <br />
// //                 <input type="emailMember" name="emailMember" id="emailMember" placeholder="Enter your email" className={styles.inputemailloginMRA} onChange={handleChange} />
// //                 <br />
// //                 <input type="password" name="passwordMember" id="passwordMember" placeholder="Enter your password" className={styles.inputpasswordloginMRA} onChange={handleChange} />
// //                 <br />
// //                 <div className={styles.loginButtonContainer}>
// //                   <button type="submit" className={styles.LogInButtonMRA}>Log IN</button>
// //                 </div>
// //               </div>
// //               <br />
// //               <div>{messageToRender}</div>
// //             </div>
// //           </form>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// import { useState, useEffect } from 'react';
// import styles from '../components/LogIn.module.css';
// import LogInImg from '../../../assets/login-singup/login-logo.png';
// import GoogleSheets from './GoogleSheets';

// export default function LogIn() {
//   const [emailLogin, setEmailLogin] = useState("");
//   const [passwordLogin, setPasswordLogin] = useState("");
//   const [churchid, setChurchid] = useState("");
//   const [messageToRender, setMessageToRender] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const spreadsheetId = process.env.REACT_APP_SPREADSHEET_ID || "";
//   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY || "";
//   const range = 'Members!A:Z';

//   useEffect(() => {
//     const checkServer = async () => {
//       try {
//         const response = await fetch('/api/health');
//         if (!response.ok) {
//           console.error('Server health check failed:', response.status);
//         }
//       } catch (error) {
//         console.error('Error checking server:', error);
//       }
//     };
//     checkServer();
//   }, []);

//   useEffect(() => {
//     const fetchSecrets = async () => {
//       try {
//         const response = await fetch('/api/secrets');
//         if (!response.ok) {
//           throw new Error('Failed to fetch secrets');
//         }
//         const secrets = await response.json();
//         setBackendUrl(secrets.backendUrl);
//         setSpreadsheetId(secrets.spreadsheetId);
//         setGoogleApiKey(secrets.googleApiKey);
//       } catch (error) {
//         console.error('Error fetching secrets:', error);
//       }
//     };
  
//     fetchSecrets();
//   }, []);

//   const handleLoginMember = async (e) => {
//     e.preventDefault();
//     if (!emailLogin || !passwordLogin || !churchid) {
//       setMessageToRender("Please fill in all fields.");
//       return;
//     }
//     const backendURL = process.env.REACT_APP_BACKEND_URL;
//     console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
//     console.log("Spreadsheet ID:", process.env.REACT_APP_SPREADSHEET_ID);
//     console.log("API Key:", process.env.REACT_APP_GOOGLE_API_KEY);

//     try {
//       const response = await fetch(`${backendURL}/api/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: emailLogin, password: passwordLogin, churchid: churchid }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Login failed:", errorData.message);
//         setMessageToRender(<span style={{ color: "red" }}>{errorData.message}</span>);
//       } else {
//         const userData = await response.json();
//         setUser(userData.user);
//         setIsLoggedIn(true);
//         setMessageToRender(<span style={{ color: "green" }}>Login Successful</span>);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setMessageToRender(<span style={{ color: "red" }}>An error occurred. Please try again later.</span>);
//     }
//   };

//   const handleChange = (e) => {
//     switch (e.target.name) {
//       case "emailMember": setEmailLogin(e.target.value); break;
//       case "passwordMember": setPasswordLogin(e.target.value); break;
//       case "churchId": setChurchid(e.target.value); break;
//       default: break;
//     }
//   };

//   return (
//     <div>
//       {isLoggedIn && user ? (
//         <GoogleSheets user={user} spreadsheetId={spreadsheetId} apiKey={apiKey} range={range} />
//       ) : (
//         <div className={styles.LogInConatainerDivMRA} id="form">
//           <form className={styles.LogInConatainerFormMRA} onSubmit={handleLoginMember}>
//             <div className={styles.LogInDivMRA}>
//               <img src={LogInImg} alt="LogInImg" style={{ height: 160, width: 250 }} />
//               <h1 className={styles.h1LoginMRA}>Log In</h1>
//               <div className={styles.inputContainerLogIn}>
//                 <input type="churchId" name="churchId" id="churchId" placeholder="Enter your Church ID" className={styles.inputchurchloginMRA} onChange={handleChange} />
//                 <br />
//                 <input type="emailMember" name="emailMember" id="emailMember" placeholder="Enter your email" className={styles.inputemailloginMRA} onChange={handleChange} />
//                 <br />
//                 <input type="password" name="passwordMember" id="passwordMember" placeholder="Enter your password" className={styles.inputpasswordloginMRA} onChange={handleChange} />
//                 <br />
//                 <div className={styles.loginButtonContainer}>
//                   <button type="submit" className={styles.LogInButtonMRA}>Log IN</button>
//                 </div>
//               </div>
//               <br />
//               <div>{messageToRender}</div>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import styles from '../components/LogIn.module.css';
import LogInImg from '../../../assets/login-singup/login-logo.png';
import GoogleSheets from './GoogleSheets';

export default function LogIn() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [churchid, setChurchid] = useState("");
  const [messageToRender, setMessageToRender] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [backendUrl, setBackendUrl] = useState('');
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [googleApiKey, setGoogleApiKey] = useState('');
  const range = 'Members!A:Z';

  useEffect(() => {
    const fetchSecrets = async () => {
      try {
        const response = await fetch('/api/secrets');
        if (!response.ok) {
          throw new Error('Failed to fetch secrets');
        }
        const secrets = await response.json();
        setBackendUrl(secrets.backendUrl);
        setSpreadsheetId(secrets.spreadsheetId);
        setGoogleApiKey(secrets.googleApiKey);
      } catch (error) {
        console.error('Error fetching secrets:', error);
      }
    };

    fetchSecrets();
  }, []);

  const handleLoginMember = async (e) => {
    e.preventDefault();
    if (!emailLogin || !passwordLogin || !churchid) {
      setMessageToRender("Please fill in all fields.");
      return;
    }

    console.log("Backend URL:", backendUrl);
    console.log("Spreadsheet ID:", spreadsheetId);
    console.log("API Key:", googleApiKey);

    try {
      const response = await fetch(`${backendUrl}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailLogin, password: passwordLogin, churchid: churchid }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        setMessageToRender(<span style={{ color: "red" }}>{errorData.message}</span>);
      } else {
        const userData = await response.json();
        setUser(userData.user);
        setIsLoggedIn(true);
        setMessageToRender(<span style={{ color: "green" }}>Login Successful</span>);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessageToRender(<span style={{ color: "red" }}>An error occurred. Please try again later.</span>);
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "emailMember": setEmailLogin(e.target.value); break;
      case "passwordMember": setPasswordLogin(e.target.value); break;
      case "churchId": setChurchid(e.target.value); break;
      default: break;
    }
  };

  return (
    <div>
      {isLoggedIn && user ? (
        <GoogleSheets user={user} spreadsheetId={spreadsheetId} apiKey={googleApiKey} range={range} />
      ) : (
        <div className={styles.LogInConatainerDivMRA} id="form">
          <form className={styles.LogInConatainerFormMRA} onSubmit={handleLoginMember}>
            <div className={styles.LogInDivMRA}>
              <img src={LogInImg} alt="LogInImg" style={{ height: 160, width: 250 }} />
              <h1 className={styles.h1LoginMRA}>Log In</h1>
              <div className={styles.inputContainerLogIn}>
                <input type="churchId" name="churchId" id="churchId" placeholder="Enter your Church ID" className={styles.inputchurchloginMRA} onChange={handleChange} />
                <br />
                <input type="emailMember" name="emailMember" id="emailMember" placeholder="Enter your email" className={styles.inputemailloginMRA} onChange={handleChange} />
                <br />
                <input type="password" name="passwordMember" id="passwordMember" placeholder="Enter your password" className={styles.inputpasswordloginMRA} onChange={handleChange} />
                <br />
                <div className={styles.loginButtonContainer}>
                  <button type="submit" className={styles.LogInButtonMRA}>Log IN</button>
                </div>
              </div>
              <br />
              <div>{messageToRender}</div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}