export interface NoticeProps {
  children: React.ReactNode;
}

export default function Notice({ children }: NoticeProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-3 border-b dark:border-gray-800">
      <p className="text-sm text-center text-black dark:text-white">
        {children}
      </p>
    </div>
  );
}
