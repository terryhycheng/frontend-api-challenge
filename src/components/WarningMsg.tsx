export const WarningMsg = ({ message }: { message: string }) => {
  return (
    <div
      data-cy="warning-msg"
      className="bg-red-100 p-4 text-red-600 rounded-md my-4 w-full"
    >
      {message}
    </div>
  );
};
