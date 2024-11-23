// import React, { useState } from "react";
// import {
//   getAuth,
//   verifyPasswordResetCode,
//   updatePassword,
// } from "firebase/auth";

// const ResetPasswordForm = (email: string) => {
//   const [newPassword, setNewPassword] = useState("");
//   const [oobCode, setOobCode] = useState("");
//   const urlParams = new URLSearchParams(window.location.search);
//   // const oobCode = urlParams.get("oobCode");

//   // 2. Xác thực thông tin phục hồi mật khẩu
//   const auth = getAuth();

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     if (oobCode) {
//       verifyPasswordResetCode(auth, oobCode)
//         .then((email) => {
//           // Hiển thị form đặt lại mật khẩu
//           return ResetPasswordForm(email);
//         })
//         .catch((error) => {
//           // Xử lý lỗi xác thực
//           console.error(error);
//         });
//     } else {
//       console.error("No oobCode found in the URL");
//     }

//     const newPasswordInput = document.getElementById("new-password");

//     if (newPasswordInput instanceof HTMLInputElement) {
//       const newPassword = newPasswordInput.value;
//       // Tiếp tục xử lý newPassword

//       if (auth.currentUser) {
//         updatePassword(auth.currentUser, newPassword)
//           .then(() => {
//             // Cập nhật mật khẩu thành công
//             console.log("Password updated successfully!");
//           })
//           .catch((error) => {
//             // Xử lý lỗi cập nhật mật khẩu
//             console.error("Error updating password:", error);
//           });
//       } else {
//         console.error("No current user found");
//       }
//     } else {
//       console.error("newPasswordInput is not an HTMLInputElement");
//     }
//   };

//   return (
//     <div>
//       <h1>Reset Password</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="oobCode">OOB Code:</label>
//           <input
//             type="text"
//             id="oobCode"
//             value={oobCode}
//             onChange={(e) => setOobCode(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="newPassword">New Password:</label>
//           <input
//             type="password"
//             id="newPassword"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// };

// export default ResetPasswordForm;
// import { getAuth } from "firebase/auth";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// const ResetPasswordForm = () => {
//   const [searchParams] = useSearchParams();
//   const [oobCode, setOobCode] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   useEffect(() => {
//     // Lấy mã oobCode từ URL
//     const oobCodeFromUrl = searchParams.get("oobCode");
//     if (oobCodeFromUrl) {
//       setOobCode(oobCodeFromUrl);
//     }
//   }, [searchParams]);

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();

//     try {
//       // Gọi hàm updatePassword với mã oobCode và mật khẩu mới
//       await updatePassword(oobCode, newPassword);
//       alert("Password updated successfully!");
//     } catch (error) {
//       console.error("Error updating password:", error);
//       alert("Error updating password. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h1>Reset Password</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="oobCode">OOB Code:</label>
//           <input
//             type="text"
//             id="oobCode"
//             value={oobCode}
//             onChange={(e) => setOobCode(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="newPassword">New Password:</label>
//           <input
//             type="password"
//             id="newPassword"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// };

// // Hàm updatePassword (cần được định nghĩa)

// export default ResetPasswordForm;
// const newPasswordInput = document.getElementById("new-password");

//     if (newPasswordInput instanceof HTMLInputElement) {
//       const newPassword = newPasswordInput.value;
//       // Tiếp tục xử lý newPassword

//       if (auth.currentUser) {
//         updatePassword(auth.currentUser, newPassword)
//           .then(() => {
//             // Cập nhật mật khẩu thành công
//             console.log("Password updated successfully!");
//           })
//           .catch((error) => {
//             // Xử lý lỗi cập nhật mật khẩu
//             console.error("Error updating password:", error);
//           });
//       } else {
//         console.error("No current user found");
//       }
//     } else {
//       console.error("newPasswordInput is not an HTMLInputElement");
//     }
const abc = () => {
  return <></>;
};

export default abc;
