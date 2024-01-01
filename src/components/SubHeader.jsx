export default function SubHeader({name}) {

  return (
    <div className="text-center px-8 lg:px-32 h-48 flex flex-wrap justify-center items-center bg-base-200 shadow-inner">
      <h1 className="text-3xl md:text-4xl">{name}</h1>
    </div>
  );
}
