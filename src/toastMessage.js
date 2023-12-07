import Swal from "sweetalert2";
const ToastMessage = (message) => {
    console.log("show ",message);
    Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "Ok",
      });
}

export default ToastMessage