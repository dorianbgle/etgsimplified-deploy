"use client"

import { useEffect, useState } from "react"
import supabase from "@/utils/supabase"

import { Listing } from "@/types/listing.types"

const ListingList = () => {

    const [listings, setListings] = useState<Listing>() 

    useEffect(() => {
        const getListings = async () => {
          const { data } = await supabase
            .from('listings')
            .select()
    
          if (data) {
            setListings(data)
          }

        }
        getListings()
      }, [])
    

  return (
    <div className="">
        
      {listings?.map((listing) => (
      <h1 key={listing.id} className="bg-red">
        Penis
        {listing.item_name}
      </h1>
      )) }
    </div>
  )
}

export default ListingList
