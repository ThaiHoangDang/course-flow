export default function GoUp() {
  return (
    <div className="fixed h-30 w-30 bottom-10 right-10">
      <a href="#top">
        <div className="w-12 h-12 bg-neutral-700 rounded-full cursor-pointer select-none
          active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
          active:border-b-[0px]
          transition-all duration-150 [box-shadow:0_8px_0_0_#000000,0_13px_0_0_#00000041]
          border-[1px] ">
          <span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>UP</span>
        </div>
      </a>
    </div>
  );
}
