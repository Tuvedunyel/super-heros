export const questions = [
    {
        id: 0,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/batman-background.svg",
        titleBlack: ["J'ai une super"],
        titleBlue: "Carte de visite ?",
        imageUrl: [ "https://btg-communication.fr/wp-content/uploads/2022/08/cdv-batman.png", "https://btg-communication.fr/wp-content/uploads/2022/08/cdv-batman-verso-1.png" ],
        imageAlt: "Bru... Batman, 11 bat road, in the cave by the chute d'eau",
        isAnswered: false,
    },
    {
        id: 1,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/groot.svg",
        titleBlack: ["J'ai des super", "pour présenter mon activité"],
        titleBlue: "Flyers",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/voyage-new.png"],
        imageAlt: "Agence de voyages, les gardiens de la galaxie",
        isAnswered: false,
    },
    {
        id: 2,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/speed.svg",
        titleBlack: ["J'ai une", "aux pouvoirs d'information uniques"],
        titleBlue: "plaquette",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/liflet.png"],
        imageAlt: "Plaquette, le pouvoir de la toile",
        isAnswered: false,
    },
    {
        id: 3,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/shield.svg",
        titleBlack: ["J'ai un hyper", "pour mes pouvoirs lors des salons"],
        titleBlue: "roll-up",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/roll-up.png"],
        imageAlt: "Roll-up avec Iron-man Captain America et Superman",
        isAnswered: false,
    },
    {
        id: 4,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/sword.svg",
        titleBlack: ["J'ai préparé des bandeaux web"],
        titleBlue: "aux capacités surhumaines",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/mock-up-imac-heros.png"],
        imageAlt: "Bandeau web, choisissez votre équipement",
        isAnswered: false,
        backgroundType: "divergent"
    },
    {
        id: 5,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/deadpool-logo.svg",
        titleBlack: ["J'ai  une stratégie pour mes"],
        titleBlue: "Réseaux sociaux",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/deadpool.png"],
        imageAlt: "Screenshot de l'Instagram de Deadpool",
        isAnswered: false,
        backgroundType: "divergent"
    },
    {
        id: 6,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/masque.svg",
        titleBlack: ["J'ai  refondu au moins une partie", "dans les 2 dernières années"],
        titleBlue: "de mon électro-site",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/refonte-site.png"],
        imageAlt: "Site web, Juste pour Les justes, vente de boisson chaude",
        isAnswered: false,
    },
    {
        id: 7,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/logo-superman.svg",
        titleBlack: ["J'ai mon propre", "pour partager mon savoir"],
        titleBlue: "film",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/mock_up-film_superman2.png"],
        imageAlt: "Télé avec superman prononçant un discours",
        isAnswered: false,
        classes: "superman",
        backgroundType: "divergent"
    },
    {
        id: 8,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/eclar.svg",
        titleBlack: ["J'ai un mega", "ultra performant"],
        titleBlue: "hébergeur de site",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/hebergement-seul.png", "https://btg-communication.fr/wp-content/uploads/2022/08/flash_seul.png"],
        imageAlt: "Carte d'hébergement",
        isAnswered: false,
        type: "flash"
    },
    {
        id: 9,
        background: "https://btg-communication.fr/wp-content/uploads/2022/08/xmen-bg.svg",
        titleBlack: ["J'ai un vrai", "pour présenter mon entreprise"],
        titleBlue: "motion design",
        imageUrl: ["https://btg-communication.fr/wp-content/uploads/2022/08/xmen-tele.png"],
        imageAlt: "Télévision",
        isAnswered: false,
        classes: "cyclop"
    }
]

export type Questions =  {
    id: number,
    background: string,
    titleBlack: string[],
    titleBlue: string,
    imageUrl: string[],
    imageAlt: string,
    isAnswered: boolean,
    classes?: string
    type?: string,
    backgroundType?: string
}[]