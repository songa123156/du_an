import {
  getAuth,
  verifyPasswordResetCode,
  updatePassword,
} from "firebase/auth";

// 1. Lấy thông tin phục hồi mật khẩu từ liên kết trong email
const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get("oobCode");

// 2. Xác thực thông tin phục hồi mật khẩu
const auth = getAuth();
if (oobCode) {
  verifyPasswordResetCode(auth, oobCode)
    .then((email) => {
      // Hiển thị form đặt lại mật khẩu
      return showResetPasswordForm(email);
    })
    .catch((error) => {
      // Xử lý lỗi xác thực
      console.error(error);
    });
} else {
  console.error("No oobCode found in the URL");
}

// 3. Cập nhật mật khẩu mới
function showResetPasswordForm(email: string) {
  // Hiển thị form cho người dùng nhập mật khẩu mới
  const newPasswordInput = document.getElementById("new-password");
  const submitButton = document.getElementById("reset-password-button");

  submitButton?.addEventListener("click", () => {
    if (newPasswordInput instanceof HTMLInputElement) {
      const newPassword = newPasswordInput.value;
      // Tiếp tục xử lý newPassword

      if (auth.currentUser) {
        updatePassword(auth.currentUser, newPassword)
          .then(() => {
            // Cập nhật mật khẩu thành công
            console.log("Password updated successfully!");
          })
          .catch((error) => {
            // Xử lý lỗi cập nhật mật khẩu
            console.error("Error updating password:", error);
          });
      } else {
        console.error("No current user found");
      }
    } else {
      console.error("newPasswordInput is not an HTMLInputElement");
    }
  });
}
