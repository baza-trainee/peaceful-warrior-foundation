type ErrorComponentProps = {
  error: Error;
  reset: () => void;
};

const ErrorDisplay = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div className="m-4 flex flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      {/* <h2 className="my-2 text-3xl text-red-700">{error.message}</h2> */}
      <button
        className="my-2 rounded border-orange-700 bg-orange-400 p-1"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorDisplay;
