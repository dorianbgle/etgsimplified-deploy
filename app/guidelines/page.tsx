const page = () => {

    const topics = [
        'Addiction', 
        'Antibiotics', 
        'Bone', 
        'Cardiovascular', 
        'Dermatology', 
        'Development', 
        'Diabetes', 
        'Fatigue', 
        'Gastrointestinal', 
        'Liver Disorders',
        'Neurology',
        'Oral and Dental',
        'Pain',
        'Palliative Care',
        'Psychotropics',
        'Respiratory',
        'Theumatology',
        'Sexual',
        'Toxicology',
        'Ulcer',
        'Wilderness'
    ]
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col text-slate-500 font-light">
        <h1 className="text-2xl  py-8">Choose from the following guidelines</h1>

        <div className="grid grid-cols-3 gap-x-12 ">
        {topics.map((topic) => (<h1 key={Math.random()}>
            <h2 className="p-3 px-8 hover:bg-slate-200 rounded-full">
            {topic}
            </h2>
        </h1>))}
        </div>

    </div>
  )
}

export default page
