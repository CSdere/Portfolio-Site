import React from "react";

function Timeline() {
  return (
    <section id="design-section" className="design-section">
      <h1 className="TimelineTitle">My Timeline</h1>
      <div className="timeline">
        <div class="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-component timeline-content">
          <h3>HTML & CSS</h3>
          <p>Jul - 2023</p>
        </div>
        <div className="timeline-component timeline-content">
          <h3>JavaScript</h3>
          <p>Nov - 2023</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div className=" timeline-component timeline-content">
          <h3>React & PostgreSQL</h3>
          <p>May - 2024</p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
