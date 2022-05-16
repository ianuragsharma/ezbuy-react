import { toast } from "react-toastify";
const successToast = (msg) => toast.success(msg);
const errorToast = (msg) => toast.error(msg);

export { successToast, errorToast };
