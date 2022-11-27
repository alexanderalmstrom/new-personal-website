export interface NoticeProps {
  children: React.ReactNode;
}

export default function Notice({ children }: NoticeProps) {
  return (
    <div className="bg-white dark:bg-gray-900 text-sm text-black dark:text-white p-3 text-center dark:border-gray-800">
      <p>{children}</p>
    </div>
  );
}
