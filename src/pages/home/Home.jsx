import { Helmet } from 'react-helmet';
import { Image } from 'react-bootstrap';
import TeachingExperience from '../../components/teaching/TeachingExperience';
import Footer from '../../components/footer/Footer';
import styles from './Home.module.css';
import belaPic from '../../assets/foto-bela.jpg';

export default function Home() {
    return (
        <div className={styles.layoutContainer}>
            <Helmet>
                <title>Isabela Munevar Escalante</title>
                <meta name="description" content="Sitio profesional de Isabela Munevar Escalante, Ph.D., especialista en Economía de la Educación" />
            </Helmet>
            
            <main className={styles.mainContent}>
                <div className={styles.imageColumn}>
                    <Image
                        src={belaPic}
                        alt="Isabela Munevar Escalante"
                        className={styles.profileImage}
                    />
                </div>
                
                <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>Isabela Munevar Escalante, Ph.D.</h1>
                        <h2 className={styles.subtitle}>Economist | Education Researcher</h2>
                        
                        <div className={styles.bioText}>
                            <p>
                                I am a postdoctoral fellow at Harvard's Center for International Development, collaborating with Professor Asim Khwaja and Juan E. Saavedra on the Colombia Education Initiative.
                            </p>
                            <p>
                                I hold a PhD in Economics and Education from Columbia University, as well as a BA and MA in Economics from Los Andes University in Bogotá, Colombia. In the summer of 2025, I will join the Economics Department of Universidad de Los Andes in Chile as an Assistant Professor of Economics.
                            </p>
                            <p>
                                My research lies at the intersection of Education Economics with Political, Public, and Development Economics. My current work focuses on understanding how different school models add value to students with diverse characteristics, addressing the fundamental question of optimal educational environments.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <TeachingExperience />
            <Footer />
        </div>
    );
}