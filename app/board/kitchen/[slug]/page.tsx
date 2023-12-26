import { FC } from "react"

interface pageProps {
    params: {slug: string}
}

const page: FC<pageProps> = ({params}) => {
    
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <h1>Post numero: {params.slug}</h1>
        </div>
    )
}

export default page