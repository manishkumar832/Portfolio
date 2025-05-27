import './About.css'
import profileImg from './assets/profile.jpg' // <-- Import your image

function About() {
    return <div id="about">
        <img src={profileImg} alt="my image" width="200px" />
        <div id="right-about">
            <h1>ABOUT ME</h1>
            <p>
                I’m Manish Kumar Bodakunti, a passionate and dedicated technology enthusiast with a Master of Computer Applications (MCA) degree. With a strong foundation in software development and problem-solving, I aim to build innovative, user-focused solutions that make a meaningful impact. I thrive in collaborative environments and continuously seek opportunities to learn and grow in the dynamic field of technology.
                <p>
                    You can reach me at:
                    📩 bodakuntimanishkumar@gmail.com
                    📱 +91 8328031081
                </p>
            </p>
        </div>
    </div>
}
export default About;