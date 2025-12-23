export default function PageContainer({
  title,
  children,
}: {
  title?: string
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {title && (
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}
