export const finishData = [
    {
        id: 0,
        titles: [ "Bravo", "Vous êtes vraiment un.e", "super héro.ïne.s" ],
        img: {
            url: "https://btg-communication.fr/wp-content/uploads/2022/08/win.png",
            alt: "Homme avec un casque et une cape rouge"
        },
        infoBulleUn: "Comment avez-vous fait ?",
        infoBulleDeux: "On veut connaître votre secret.",
        textButton: "Je partage mon pouvoir"
    },
    {
        id: 1,
        titles: ["Bien !", "Vous êtes bientôt un.e", "super héro.ïne.s"],
        img: {
            url: "https://btg-communication.fr/wp-content/uploads/2022/08/pas-mal.png",
            alt: "Home avec un casque et une cape rouge"
        },
        infoBulleUn: "Vous êtes presque prêts",
        infoBulleDeux: "on Finalise votre super pouvoir ?",
        textButton: "Je veux plus de pouvoirs"
    },
    {
        id: 2,
        titles: ["Pas trop mal", "Vous êtes un.e super héro.ïne.s", "en devenir"],
        img: {
            url: "https://btg-communication.fr/wp-content/uploads/2022/08/moyen.png",
            alt: "Home avec un casque et une cape rouge"
        },
        infoBulleUn: "Il faut s’entrainer encore",
        infoBulleDeux: "on discute de vos capacités ?",
        textButton: "Je veux un super pouvoir"
    },
    {
        id: 3,
        titles: ["Bon, vous n'êtes,", "pas un.e super héro.ïne.s..."],
        img: {
            url: "https://btg-communication.fr/wp-content/uploads/2022/08/mauvais.png",
            alt: "Home avec un casque et une cape rouge"
        },
        infoBulleUn: "Il faut que l'on discute",
        infoBulleDeux: "Il est temps d'échanger avec nous",
        textButton: "Je veux apprendre"
    }
]

export type FinishData = {
    id: number,
    titles: string[],
    img: {
        url: string,
        alt: string
    },
    infoBulleUn: string,
    infoBulleDeux: string,
    textButton: string
}[]
