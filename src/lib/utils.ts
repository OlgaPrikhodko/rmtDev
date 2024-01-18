import toast from "react-hot-toast";

export const handleError = (error: unknown) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    console.log(error);
    message = "An error occured";
  }

  toast.error(message);
};
