const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col px-5 justify-center">

    {/* Divider for Left and Right Column */}
    <section className="flex justify-center h-full">
        <div className="w-1/3 justify-center flex flex-col h-full font-light">
            <h1 className=" text-5xl font-semibold flex py-10 text-slate-400">Opioid Addiction</h1>
            <h1 className="py-1 text-lg text-gray-400">Brief Overview</h1>
            <p className="py-5 text-md text-gray-400">The risks of most harms from tobacco smoking correlate with cumulative exposure. Other forms of tobacco use (chewing, use of tobacco plugs and inhaling ‘heat-not-burn’ tobacco) are also harmful and are managed in the same way as tobacco smoking. Although nicotine vaping products cause harms, they are often used as second-line therapy when other measures are not successful or suitable in the management of nicotine dependence.</p>

            <p className="py-2 text-sm hover:bg-slate-200 bg-slate-100 rounded-md w-48 flex items-center justify-center text-gray-400">Print Information Sheet</p>
        </div>

        <div className="w-1/3 justify-center flex  flex-col gap-y-10 items-center text-white">
            <h3 className="bg-slate-400 rounded-md w-2/3 py-4 flex justify-center hover:bg-gray-300">Health Benefits of Quitting Smoking</h3>
            <h3 className="bg-slate-400 rounded-md w-2/3 py-4 flex justify-center hover:bg-gray-300">General Advice on Smoking</h3>
            <h3 className="bg-slate-400 rounded-md w-2/3 py-4 flex justify-center hover:bg-gray-300">Assessing Nicotine Dependence</h3>
            <h3 className="bg-slate-400 rounded-md w-2/3 py-4 flex justify-center hover:bg-gray-300">Quitting Options</h3>\
        </div>
    </section>
    
    </div>
  )
}

export default page
