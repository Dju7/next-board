'use client'

import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import io, { Socket } from 'socket.io-client';


let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export default function ChatBox() {
    const [message, setMessage] = useState("");
    const [allMessage, setAllMessage] = useState<{ username: string; message: string }[]>([]);
    const { data: session } = useSession();

    useEffect(() => {
        socketInitializer();
    }, []);

    async function socketInitializer() {
        try {
          const response = await fetch("/api/socket/socket");
  
          if (!response.ok) {
              throw new Error(`Error fetching socket API: ${response.statusText}`);
          }

        socket = io();

        socket.on("receive-message", (data) => {
            console.log(data);
            setAllMessage((pre) => [...pre, data]);
        });
      } catch (error) {
        console.error("Error in socketInitializer:", error);
    }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (socket) {
          const username = session?.user.username || "Anonymous";
          socket.emit("send-message", {
              username,
              message,
          });
      } else {
          console.error("Le socket n'est pas encore défini.");
      }
  }

    return (
        <div className="h-full w-full flex flex-col items-center gap-6 bg-clearBlue">
            <h1 className="text-3xl text-center mt-4">C H A T - B O X</h1>
            <div className="bg-primary text-secondary min-h-[70%] w-[90%] border border-secondary">
                {allMessage.map(({ message, username }, index) => (
                    <p key={index}>{username} : {message}</p>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex w-full">
                <input name="message" value={message} onChange={(e) => setMessage(e.target.value)} className=" h-10 w-[500px] ml-10 p-2"/>
                <button type="submit" className="bg-secondary ml-4 p-2">Envoyer</button>
            </form>
           
        </div>
    );
}