import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CustomToast() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
export { CustomToast };
