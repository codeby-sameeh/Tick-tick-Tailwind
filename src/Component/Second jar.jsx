import React from 'react'

const Secondjar = () => {
  return (
   
    // <div className='main-second'>
    //    <div className="mt-5">
    //       <li className='list-none h-[45px] w-[90%] flex gap-2  hover:bg-zinc-200 p-[15px] rounded-2xl'>
    //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-plus-2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M10 16h4"/><path d="M12 14v4"/></svg>
    //         <span>Today</span>
    //       </li>           
    //       <li className='list-none h-[45px] w-[90%]  flex gap-2  hover:bg-zinc-200 p-[15px] rounded-2xl'>
    //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
    //         <span>Next seven days</span>
    //       </li>
    //       <li className='list-none h-[45px] w-[90%]  flex gap-2  hover:bg-zinc-200 p-[15px] rounded-2xl'>
    //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
    //       <span>inbox</span>
    //       </li>       
    //     </div>     
    //     <div className="line-bottom"></div> 
    //     <div className="second-list">
    //       <label htmlFor="list">Lists</label>
    //       <li className='list-none h-[45px] w-[90%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
    //       👋   welwcome   <span>11</span>
    //       </li>  <li className='list-none h-[45px] w-[90%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
    //       👋   welwcome     <span>11</span>     
    //       </li>  <li className='list-none h-[45px] w-[90%]  hover:bg-zinc-200 p-[15px] rounded-2xl'>
    //       👋   welwcome    <span>11</span>
    //       </li>
    //     </div>
    //     <div className="third-list">
    //       <label htmlFor="list">Filters</label>
    //      <br />
    //      <div className='third-list-inner'>
    //       Display tasks with tasks quickly select atagby typing '#' when adding a task
    //      </div>
    //     </div>
    //     <div className="third-list">
    //       <label htmlFor="list">Tasks</label>
    //      <br />
    //      <div className='third-list-inner'>
    //       Display tasks with tasks quickly select atagby typing when adding a task
    //      </div>
    //     </div>
    //     <div className="line-bottom"></div> 
         

    //     <div className="first-list">
    //     <li className='list-none h-[45px] w-[90%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
    //      <span>Completed</span>
    //     </li>
    //     <li className='list-none h-[45px] w-[90%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    //     <span>Trash</span>
    //     </li>
    
    //     </div>     
    //     </div>




    <div className='bg-white-100 h-screen w-[300px] text-black border-x'>
    <ul className='h-[40%] w-[100%] flex justify-evenly items-center flex-col '>
        {/* <Link to="/" className='h-[10%] w-[100%] flex justify-evenly items-center flex-col'> */}
            <li className='h-[60px] w-[100%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
                {/* <img className='h-[20px] w-[20px]' src={today} alt="" />Today */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-plus-2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M10 16h4"/><path d="M12 14v4"/></svg>
            <span>Today</span>

            </li>
        {/* </Link> */}
        {/* <Link to="/next7days" className='h-[10%] w-[100%] flex justify-evenly items-center flex-col'> */}
            <li className='h-[60px] w-[100%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
                {/* <img className='h-[20px] w-[20px]' src={week} alt="" />Next 7 Days */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            <span>Next seven days</span>

            </li>
        {/* </Link> */}
        {/* <Link to="/inbox" className='h-[10%] w-[100%] flex justify-evenly items-center flex-col'> */}
            <li className='h-[60px] w-[100%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
                {/* <img className='h-[25px] w-[25px]' src={inbox} alt="" />Inbox */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
          <span>inbox</span>

            </li>
        {/* </Link> */}
        {/* <Link to="/compleated" className='h-[10%] w-[100%] flex justify-evenly items-center flex-col'> */}
            <li className='h-[60px] w-[100%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
                {/* <img className='h-[20px] w-[20px]' src={check} alt="" />Completed */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
        <span>Completed</span>

            </li>
        {/* </Link> */}
        {/* <Link to="/trash" className='h-[10%] w-[100%] flex justify-evenly items-center flex-col'> */}
            <li className='h-[60px] w-[100%] flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'>
                {/* <img className='h-[25px] w-[25px]' src={trash} alt="" />Trash */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29fad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        <span>Trash</span>

            </li>
        {/* </Link> */}
    </ul>
</div>
  )
}

export default Secondjar