import React from "react";

type Memory = {
    name: string;
    years?: string;
    content: React.ReactNode;
    imageUrl?: string;
    links?: { label: string; url: string }[];
};

const memories: Memory[] = [
    {
        name: "Harry McKeever",
        years: "1928-2016",
        content: (
            <>
                <p>
                    Harry McKeever passed away Thursday, Nov. 4, 2016 at Kindred Hospital in Dallas after a brief illness. Harry was born Sept, 4 1928 in the Banner community of Holton, Kansas to Clark and Alice McKeever. He graduated from Holton High School in 1946 and immediately entered the army, where he served 2 years duty in Japan. After discharge, he returned to Kansas and enrolled at Baker University, Baldwin, Kansas graduating in 1952.
                </p>
                <p>
                    It was then, he started his 40 year career in the insurance industry as a payroll auditor of Workers Comp with Bituminous Casualty Co. He was transferred to Rock Island III. and there he met and married Sally Maske in Dec 1958. This year would have been their 58th anniversary. They often joked that they were the original "When Harry Met Sally."
                </p>
                <p>
                    When Harry retired he found new avocations--friends laughed that it took him 10 minutes to adjust to retirement. He rediscovered table tennis after playing in the army. He took lessons, played tournaments - won trophies. With his partner, Richard Grant, they were in senior citizen tournaments from Disney World to San Francisco. Harry and Sally loved to travel, so they always tacked a vacation trip on the tournaments to explore the area. With art that traveling, you really need a van- so Harry bargained his way to 5 different vans--Hondas, of course. Needless to say trading cars was another hobby of his.
                </p>
                <p>
                    He became interested in volunteer work and was active in the Richardson Police Citizens academy and Volunteering at a Police station for a number of years. He helped to organize a Crime watch for Kindred Lane.
                </p>
                <p>
                    He is survived by his wife, Sally; daughter, Barbara, Dallas, his son, Brad and wife Laurie of Flower Mound; grandsons, Matthew and Mitchell McKeever; brother, Wendel McKeever-of Shawnee Mission, Kansas; brother-in-law, Joe Maske and Becky of Pelican Rapids MN; niece Amy and Bob Mueller and son Lucas of Wichita, KS. He was preceded in death by his parents; brother, Duane, Gene and Kathryn Maske of Iowa and sister-in-law Marilyn Maske.
                </p>
                <p>
                    In memory of Harry you may choose: American Diabetes Assoc, American Cancer Society, or the Scholarship fund for the RPD Citizens <a href="http://www.rcpaaa.org/scholarship-program/" target="_blank" rel="noopener noreferrer">Scholarship Program</a>
                </p>
            </>
        ),
    },
    {
        name: "Dorothea Taschner",
        years: "1928-2012",
        content: (
            <>
                <p>
                    Dorothea Taschner, a longtime DFWTT tournament player, passed away on August 20, 2012. Her table tennis playing spanned many decades after she first started playing at the age of 16. In the January 2011 edition of Plano Profile, a very interesting article was written about her life and her passion for table tennis.
                </p>
                <p>
                    <a href="http://www.tributes.com/show/Dorothea-Auguste-Taschner-94312463" target="_blank" rel="noopener noreferrer">
                        Tributes.com Memorial
                    </a>
                </p>
            </>
        ),
    },
    {
        name: "Hollis Hall",
        content: (
            <>
                <p>
                    In loving memory and dedication of Hollis. Hollis Hall was an avid table tennis player, who had a passion for table tennis. He was always a pleasure to be around, and it did not matter if he won or loss as long as he was playing table tennis. Hollis played many tournaments with Vic Maryoung as his doubles partner. Even during his battle with cancer he thought about making a come back to play. Unfortunately, Hollis passed away July 8th 2003 after battling cancer. His legacy and passion for table tennis lives on in all of us.
                </p>
                <p>
                    <em>Hollis and Vic (left to right)</em>
                </p>
            </>
        ),
    },
    {
        name: "Frank Opp",
        years: "1931-2006",
        content: (
            <>
                <p>
                    My friendship with Frank was that we had so much in common in our younger days, both educated as Engineers, both worked as Engineers for technical companies (Collins Radio for me and T.I for Frank) and both were in the Marine Corps. I think our Engineering connection was the strongest since you can take the slide rule away from the Engineer, but you can't take the Engineer away from the slide rule, meaning that we both had an analytical mind and "thought" like Engineers our entire lives.
                </p>
                <p>
                    Frank applied his engineering background to his game of table tennis and analyzed his game from an engineering standpoint to an almost obsessive degree to improve his game but he mainly achieved a degree of success by perseverance rather than trying to understand the angular momentum of the ball when struck with a particular angle and speed of the racquet. He improved his game by hitting hundreds of balls a day and hundreds of serves a day and just about wore out a robot machine which he modified to feed him table tennis balls at obscene speeds and spins. He also took lessons off and on for years from instructors who helped him develop the techniques for success. He played four or five times a week at the recreation and senior centers in the area and also in about every tournament from the Red River to the Rio Grande. In short, he was a Table Tennis fanatic.
                </p>
                <p>
                    However, when away from table tennis, I saw another side of Frank when our interest in birds and Purple Martins in particular provided many long discussions on their antics and how to attract them and keep the House Sparrows away from their nests so they could raise their young in safety.
                </p>
                <p>
                    Frank was an interesting person and a good friend and I have missed him very much.
                </p>
                <p>
                    <strong>Richard Grant</strong>
                </p>
                <hr />
                <p>
                    <strong>A Few Words About Frank Opp and Table Tennis (from Joyce Opp)</strong><br />
                    Frank Opp loved table tennis. That became obvious as soon as he started to play. As engineering had been his vocation, table tennis became his avocation. His retirement years were spent practicing, learning, playing and traveling to various tournaments. It was a new life.
                </p>
                <hr />
                <p>
                    <strong>A few words about Frank Opp and table tennis:</strong><br />
                    Enthusiastic. Determined. Competitive. Dedicated. Sincere. Obsessed. Frank Opp!
                </p>
            </>
        ),
    },
];

function MemoryCard({ memory }: { memory: Memory }) {
    return (
        <section style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #eee", borderRadius: 8, background: "#fafafa" }}>
            <h2>
                In Memory of {memory.name}
                {memory.years && <span style={{ fontWeight: "normal", marginLeft: 8 }}>({memory.years})</span>}
            </h2>
            <div>{memory.content}</div>
            {memory.links && (
                <ul>
                    {memory.links.map((link) => (
                        <li key={link.url}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default function MemoriesPage() {
    return (
        <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
            <h1>Memories</h1>
            {memories.map((memory) => (
                <MemoryCard key={memory.name} memory={memory} />
            ))}
            <div style={{ textAlign: "center", marginTop: "3rem", color: "#888" }}>
                <h2>Friends forever</h2>
            </div>
        </main>
    );
}