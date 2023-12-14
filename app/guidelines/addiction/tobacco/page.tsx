import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import Link from "next/link"

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col px-5 justify-center">

    {/* Divider for Left and Right Column */}
    <section className="flex justify-center h-full">
        <div className="w-1/3 justify-center flex flex-col h-full">
            <h1 className=" text-5xl font-semibold flex pt-10 text-slate-400">Nicotine Addiction</h1>
            <h1 className="py-1 text-lg text-gray-400">Brief Overview</h1>
            <p className="py-5 text-md text-gray-400">The risks of most harms from tobacco smoking correlate with cumulative exposure. Other forms of tobacco use (chewing, use of tobacco plugs and inhaling ‘heat-not-burn’ tobacco) are also harmful and are managed in the same way as tobacco smoking. Although nicotine vaping products cause harms, they are often used as second-line therapy when other measures are not successful or suitable in the management of nicotine dependence.</p>

            <p className="py-2 text-sm hover:bg-slate-200 bg-slate-100 rounded-2xl w-48 flex items-center justify-center text-gray-400">Print Information Sheet</p>
        </div>

        <div className="w-1/3 justify-center flex  flex-col gap-y-10 items-center text-white font-light">

        {/* 1. Benefits of Quitting Smoking */}
            <h3 className="bg-slate-400 rounded-md w-2/3 py-4 flex justify-center hover:bg-gray-300">
            <Dialog>
            <DialogTrigger>Benefits of Quitting Smoking</DialogTrigger>
            <DialogContent>
            <DialogHeader>
            <DialogTitle className="text-2xl py-2">More information about</DialogTitle>
            <DialogDescription className="text-center justify-center flex flex-col">
                <h1>Quitting in 1 week</h1>
                <h1>Quitting in 1 month</h1>
            </DialogDescription>
            </DialogHeader>
            </DialogContent>
            </Dialog>
            </h3>

        {/* General Advice on quitting smoking */}
            <h3 className="bg-slate-400 rounded-md w-2/3 py-4 flex justify-center hover:bg-gray-300">General Advice on Smoking</h3>

        {/* 2. Management Diagram */}
            <h3 className="bg-slate-400 rounded-md w-2/3 py-4 flex justify-center hover:bg-gray-300">Management Overview</h3>


        {/* 3. Assessing Nicotine Dependence */}
            <h3 className="bg-slate-400 hover:bg-gray-300 py-4 w-2/3 flex justify-center rounded-md">
                <Dialog>
                <DialogTrigger>Assessing Nicotine Dependence</DialogTrigger>
                <DialogContent>
                <DialogHeader className="text-2xl py-2"> Assessing Nicotine Dependence
                <DialogTitle className="text-sm py-2">Withdrawal is characterised by 2 or more of the following symptoms starting within 24 hours of nicotine reduction or stopping
                </DialogTitle>
                <DialogDescription className="flex flex-col">

                <form action="" className="flex flex-col justify-center">
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Cravings for nicotine
                </label>
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Anxiety
                </label>
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Irritability or restlessness
                </label>
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Reduced concentration
                </label>
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Malaise
                </label>
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Increased cough
                </label>
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Dysphoria
                </label>
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Mouth ulceration
                </label>
                <label className="flex items-center gap-x-2 py-1">
                    <input type="checkbox" name="myCheckbox"/> Insomnia
                </label>
                <label className="flex items-center gap-x-2 selection:py-1">
                    <input type="checkbox" name="myCheckbox"/> Increased appetite
                </label>
                </form>


    <h2 className="text-xl py-3">Assessing High Nicotine Dependence</h2>
        <section className="flex">
        <div className="pb-5">
            <div className="flex items-center gap-x-3 justify-center py-1">
            <p className="text-xs">How soon after waking is your first cigarette (or other nicotine intake)?</p>
            <label className="flex items-center gap-x-2 py-1">
                    <input type="radio" name="myCheckbox"/> Yes
            </label>
            <label className="flex items-center gap-x-2 py-1">
                    <input type="radio" name="myCheckbox"/> No
            </label>
            </div>

            <div className="flex items-center gap-x-3 justify-center py-1">
            <p className="text-xs">Have you experienced cravings or other withdrawal symptoms for cigarettes while using drug therapy to manage previous efforts to cut down or stop smoking?</p>
            <label className="flex items-center gap-x-2 py-1">
                    <input type="radio" name="myCheckbox"/> Yes
            </label>
            <label className="flex items-center gap-x-2 py-1">
                    <input type="radio" name="myCheckbox"/> No
            </label>
            </div>

            <div className="flex items-center gap-x-3 justify-center py-1">
            <p className="text-xs">Do you smoke (or use other forms of nicotine) as much as usual when you are unwell?</p>
            <label className="flex items-center gap-x-2 py-1">
                    <input type="radio" name="myCheckbox"/> Yes
            </label>
            <label className="flex items-center gap-x-2 py-1">
                    <input type="radio" name="myCheckbox"/> No
            </label>
            </div>
        </div>
        </section>

    <h2 className="tex-xs bg-yellow-200/30">Smoking within 30 minutes of waking is the most important marker of high nicotine dependence.</h2>
                </DialogDescription>
                </DialogHeader>
                </DialogContent>
                </Dialog>
            </h3>

        {/* Quitting Options */}
            <h3 className="bg-slate-400 hover:bg-gray-300 py-4 w-2/3 flex justify-center rounded-md">
                <Dialog>
                <DialogTrigger>Quitting Options</DialogTrigger>
                <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-2xl py-2">Quitting Options</DialogTitle>
                <DialogDescription className="text-center justify-center flex flex-col">
                    <Link href={'https://localhost:3000'} className="text-md text-black py-2">Behavourial Options</Link>
                    <Link href={'https://localhost:3000'} className="text-md text-black py-2">Pharmaceutical Options</Link>
                    <h1>My patient prefers</h1>

                    cost—though all options are significantly cheaper than smoking
convenience—some patients prefer taking once or twice daily tablets; others value the wider availability of combination NRT (available at most supermarkets, pharmacies and online)
the patient’s preferred form of therapy (tablets [varenicline or bupropion], gum, lozenges, patches, inhalators, sprays)—for patients choosing NRT, see Table 22.7 for a comparison of the available formulations.
Only NRT, varenicline and bupropion are registered by the Australian Therapeutic Goods Administration (TGA) for the management of tobacco smoking.



The patient is ... years old, weighting ... kg. 

If... then take precautions. 

Precautions. (RadixUI pop ups based on age and weight. d a recent coronary event or skin graft. )

E.g.
Is the patient below 12?
Is the patient below 45kg?
Has the patient had a recent coronary event or skin graft? 
Does the patient have Phenoketonuria?
Does the patient have nicotine hypersensitivity? 
                    <Link href={'https://localhost:3000'} className="text-md text-black py-2">Pregnant Patients</Link>
                    <Link href={'https://localhost:3000'} className="text-md text-black py-2">Breastfeeding patients</Link>
                </DialogDescription>
                </DialogHeader>
                </DialogContent>
                </Dialog>
            </h3>
        
        </div>
        

        
    </section>
    
    </div>
  )
}

export default page


