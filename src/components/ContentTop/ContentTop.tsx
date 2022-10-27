export const ContentTop: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <h2 className='title'>{title}</h2>
      <p className='subtitle'>{subtitle}</p>
    </>
  );
};
