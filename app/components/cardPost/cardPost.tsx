
interface PostProps {
    id: string; 
    title: string;
    content: string | null;
    author: string | null;
  }

const CardPost:React.FC<PostProps>= ({ id, title, content, author }) => {
    return (
        
        <div className="bg-secondary w-full h-[30%] text-clearBlue shadow-xl shadow-primary p-2 rounded-bl-2xl">
            <h2 className="text-2xl text-clearBlue font-bold text-center border-b border-clearBlue mb-4">{title}</h2>
            <div className="flex flex-col justify-between h-[80%]">
                <p className="my-4 truncate  h-8 ">{content || "contenu non disponible"}</p>   
                <p className="text-sm text-right">écrit par: {author}</p>
            </div>
        </div>
       
    )
}

export default CardPost
