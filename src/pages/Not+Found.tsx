type NotFoundProps = {
  message?: string;
};

const NotFound = ({ message = "Not Found" }: NotFoundProps): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-amber-950/20">
      <div>
        <h1 className="font-Poppins text-xl font-bold text-gray-300/60">
          404 | {message}
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
