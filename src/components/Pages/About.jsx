import "./About.css";
export const About = () => {
  return (
    <>
      <div className="about-container">
        <section className="about-hero">
          <div className="hero-image"></div>
          <h1>About the Dark Knight’s Realm</h1>
        </section>
        <section className="about-content">
          <h2>My Mission</h2>
          <p>
            At the heart of Gotham, I bring you the ultimate Batman movie
            experience. My passion is to deliver cinematic masterpieces with
            subtitles of your choice, honoring the legacy of the Dark Knight.
          </p>
          <h2>The Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>ATTA HAIDER</h3>
              <p>Creator & Visionary</p>
            </div>
            <div className="team-member">
              <h3>ATTA HAIDER</h3>
              <p>Design Lead</p>
            </div>
            <div className="team-member">
              <h3>ATTA HAIDER</h3>
              <p>Tech Wizard</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
