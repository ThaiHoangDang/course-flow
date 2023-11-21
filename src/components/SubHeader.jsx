export default function SubHeader({name}) {

  return (
    <div className="px-8 lg:px-32 h-32 flex justify-center items-center bg-base-200">
      <h1 className="text-4xl">{name}</h1>
    </div>
  );
}
