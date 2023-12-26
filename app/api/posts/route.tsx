import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.username) {
            return NextResponse.json({ error: "Utilisateur non authentifié ou nom d'utilisateur introuvable." });
        }

        const { title, content } = await req.json();

        const user = await db.user.findFirst({
            where: { username: session.user.username },
        });

        
        const result = await db.post.create({
            data: {
                title, 
                content,
                author: {
                    connect: { id: user?.id },
                },
            }
        });

        return NextResponse.json({ result });
    } catch (error) {
        console.error('Erreur lors du traitement de la requête:', error);
        return NextResponse.json({ error: "Une erreur s'est produite lors du traitement de la requête." });
    }
}