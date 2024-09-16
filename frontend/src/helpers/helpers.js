import toast from "react-hot-toast";
export const toaster = (type, message) => {
  toast[type](message);
};
