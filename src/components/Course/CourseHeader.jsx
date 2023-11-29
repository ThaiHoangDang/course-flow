export default function CourseHeader({code, name, liked, difficulty, useful}) {

  return (
    <div className="bg-base-200 shadow-inner">
      <div className="text-center px-8 lg:px-32 p-10 flex flex-wrap justify-center items-center">
        <div>
          <h1 className="w-full text-xl md:text-2xl text-neutral-500 mb-2">{code}</h1>
          <h1 className="text-3xl md:text-4xl">{name}</h1>
        </div>
      </div>
      <div className="px-8 lg:px-32 pb-10 border-b">
        <div className="mx-auto stats flex max-w-2xl shadow text-center">
    
          <div className="stat">
            <div className="stat-title mb-3">Liked</div>
            <div className="text-3xl font-bold">{liked ? liked + "%" : "_"}</div>
          </div>
          
          <div className="stat">
            <div className="stat-title mb-3">Difficulty</div>
            <div className="text-3xl font-bold">{difficulty ? difficulty + "%" : "_"}</div>
          </div>
          
          <div className="stat">
            <div className="stat-title mb-3">Useful</div>
            <div className="text-3xl font-bold">{useful ? useful + "%" : "_"}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
