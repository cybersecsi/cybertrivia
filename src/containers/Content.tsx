const Content: React.FC<React.BaseHTMLAttributes<HTMLDivElement>> = ({
  children,
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className='workspace'>
      <div className='base-content'>{children}</div>
    </div>
  );
};

export default Content;
