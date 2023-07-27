import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const GetRepoModule: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getRepo = () => {
      axios
        .get('/api/githubrepo')
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
        })
    }

    useEffect(() => {
        getRepo();
      }, []);
    
    getRepo()

    return (
        <div></div>
    )



}