import styles from './SkillsStyles.module.css';
import htmlIcont from '../../assets/html5-lg.svg';
import csslIcont from '../../assets/css-lg.svg';
import jsIcont from '../../assets/js-lg.svg';
import tailwindIcont from '../../assets/tailwind-lg.svg';
import reactIcont from '../../assets/react-lg.svg';
import gitIcont from '../../assets/git-lg.svg';
// import checkMarkIconLight from '../../assets/html-light.svg';
// import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const htmllg = theme === 'light' ? htmlIcont : htmlIcont;
  const csslg = theme === 'light' ? csslIcont : csslIcont;
  const jslg = theme === 'light' ? jsIcont : jsIcont;
  const tailwindlg = theme === 'light' ? tailwindIcont : tailwindIcont;
  const reactlg = theme === 'light' ? reactIcont : reactIcont;
  const gitlg = theme === 'light' ? gitIcont : gitIcont;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Tech stack</h1>
      <hr />
      <div className={styles.skillList}>
        <img src={htmllg} alt="" />
        <img src={csslg} alt="" />
        <img src={jslg} alt="" />
        <img src={tailwindlg} alt="" />
        <img src={reactlg} alt="" />
        <img src={gitlg} alt="" />
        {/* <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" /> */}
      </div>
      <hr />
      {/* <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div> */}
    </section>
  );
}

export default Skills;
