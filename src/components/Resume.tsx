import { Avatar,  Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="Genesis">
      <Tab title="Genesis">
        <h3>I am Mirox</h3>
        <Avatar src="https://i.pinimg.com/736x/40/22/46/40224646463a6dd9e057d882c067076a.jpg" alt="A portrait of the artisan" size="140px" />

        <p>A software engineer, learning about the technologies that connect humans</p>
        <Fieldset legend="My Saga">
          <p>
           I'm a completely self-taught student with a passion for technology. I'm currently studying Systems Analysis and Development, but my journey began years ago when I was young, fascinated by the infinite digital worlds!
          </p>
        </Fieldset>
      </Tab>
      
      <Tab title="Arsenal of a Software Engineer">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Fieldset legend="Core Languages & Frameworks">
            <ul>
              <li className="resume-skills">JavaScript (ES6+)</li>
              <ProgressBar percent={98} width="200px" />
              <li className="resume-skills">TypeScript</li>
              <ProgressBar percent={95} width="200px" />
              <li className="resume-skills">React.js & React Native</li>
              <ProgressBar percent={97} width="200px" />
              <li className="resume-skills">Next.js</li>
              <ProgressBar percent={96} width="200px" />
              <li className="resume-skills">Node.js</li>
              <ProgressBar percent={90} width="200px" />
              <li className="resume-skills">Php</li>
              <ProgressBar percent={80} width="200px" />
              
            </ul>
          </Fieldset>
          <Fieldset legend="Styling & UI Craft">
            <ul>
              <li className="resume-skills">HTML5 & CSS3</li>
              <ProgressBar percent={100} width="200px" />
              <li className="resume-skills">SASS</li>
              <ProgressBar percent={92} width="200px" />
              <li className="resume-skills">Tailwind CSS</li>
              <ProgressBar percent={94} width="200px" />
              <li className="resume-skills">wordpress</li>
              <ProgressBar percent={85} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Development & Operations">
            <ul>
              <li className="resume-skills">Git & GitHub</li>
              <ProgressBar percent={99} width="200px" />
              <li className="resume-skills">Docker</li>
              <ProgressBar percent={75} width="200px" />
              <li className="resume-skills">SQL</li>
              <ProgressBar percent={70} width="200px" />
            </ul>
          </Fieldset>
        </div>
      </Tab>
      <Tab title="The Soul of the Engineer">
        <Fieldset legend="Core Attributes">
          <p>
            My main expertise lies in web development, working with technologies such as React, TypeScript, and Next.js. I also have solid experience in managing and structuring data flow with databases, as well as a flexible design approach that allows me to adapt projects to different needs and deliver efficient solutions.
           </p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;