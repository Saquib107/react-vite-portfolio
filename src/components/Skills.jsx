export default function Skills() {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "Node.js",
        "MongoDB", "Express", "SQL", "GSAP", "Tailwind",
    ];

    return (
        <section className="min-h-screen px-20">
            <h2 className="text-neon text-4xl mb-10">Tech Stack</h2>
            <div className="grid grid-cols-5 gap-6">
                {skills.map(skill => (
                    <div
                        key={skill}
                        className="p-6 border border-gray-700 hover:border-neon hover:scale-105 transition text-center"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
