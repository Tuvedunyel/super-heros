export const finishData = [ {
    id: 0,
    titre: ["Bravo", "Vous êtes vraiment un.e", "super héros"],
    img: {
        url: "https://btg-communication.fr/wp-content/uploads/2022/08/win.png",
        alt: "Homme avec un casque et une cape rouge"
    },
    infoBulleUn: "Comment avez-vous fait ?",
    infoBulleDeux: "On veut connaitre votre secret.",
    textButton: "Je partage mon pouvoir"
} ]

export type FinishData = {
    id: number,
    titre: string[],
    img: {
        url: string,
        alt: string
    },
    infoBulleUn: string,
    infoBulleDeux: string,
    textButton: string
}[]